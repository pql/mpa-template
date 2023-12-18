<template>
  <!-- 工具栏 start  -->
  <div class="tool-bar" v-show="totalPageNum != 0">
    <div class="pageNum">{{ currentPageNum }} / {{ totalPageNum }}</div>
  </div>
  <!-- 工具栏 end -->

  <div class="pdf-viewer" @scroll="onThrottleScroll">
    <template v-for="item in totalPageNum" :key="item">
      <canvas class="pdf-item" :id="`pdf-canvas-${item}`" />
    </template>
  </div>
</template>

<script lang="ts">
// https://blog.csdn.net/geejkse_seff/article/details/123100456
import { defineComponent, nextTick, reactive, toRefs, watchEffect } from "vue";
import { Throttle } from "../../hooks/useTools";
import * as pdfjs from "pdfjs-dist";
import { PDFDocumentProxy, TypedArray } from "pdfjs-dist/types/src/display/api";
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js";

export default defineComponent({
  props: {
    url: { type: String },
  },
  setup(props, { emit }) {
    const throttle = new Throttle();
    let pdfCtx: any = null;
    const state = reactive({
      currentPageNum: 0, // 当前页
      totalPageNum: 0, // 总页数
      scale: 1, // desired ratio of canvas size to document size
    });

    const resolvePdf = async (url: String | TypedArray | ArrayBuffer) => {
      const loadingTask = pdfjs.getDocument(url);
      const pdf: PDFDocumentProxy = await loadingTask.promise;
      pdfCtx = pdf;
      state.totalPageNum = pdf.numPages;
      state.currentPageNum = 1;

      nextTick(() => {
        renderPdf();
      });
    };

    const renderPdf = async (num = 1) => {
      const page = await pdfCtx.getPage(num);
      const desiredWidth = document.body.clientWidth;
      const viewport = page.getViewport({ scale: state.scale });
      const scale = desiredWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale: scale });
      // Support HiDPI-screens.
      const outputScale = window.devicePixelRatio || 1;

      const canvas = document.getElementById(
        `pdf-canvas-${num}`
      ) as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");

      canvas.width = Math.floor(scaledViewport.width * outputScale);
      canvas.height = Math.floor(scaledViewport.height * outputScale);
      canvas.style.width = Math.floor(scaledViewport.width) + "px";
      canvas.style.height = Math.floor(scaledViewport.height) + "px";

      const transform =
        outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

      const renderContext = {
        canvasContext: ctx,
        transform: transform,
        viewport: scaledViewport,
      };

      page.render(renderContext);
      if (num < state.totalPageNum) {
        renderPdf(num + 1);
      } else {
        emit("rendered");
      }
    };

    const onThrottleScroll = (e: any) => {
      throttleScroll(e);
    };

    const throttleScroll = throttle.use((e: any) => {
      let pages = document.getElementsByClassName(
        "pdf-item"
      ) as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < state.totalPageNum; i++) {
        let offset = e.target.offsetHeight / 2 - 100; // 距顶部的距离（当前页在滚动到页面可视区的哪个位置时更改currentPageNum）
        if (e.target.scrollTop >= pages[i].offsetTop - offset) {
          if (
            (pages[i + 1] &&
              e.target.scrollTop < pages[i + 1].offsetTop - offset) ||
            !pages[i + 1]
          ) {
            state.currentPageNum = i + 1;
          }
        }
      }
      emit("onscroll", state);
    }, 500);

    watchEffect(() => {
      if (props.url) {
        resolvePdf(props.url);
      }
    });

    return {
      ...toRefs(state),
      resolvePdf,
      onThrottleScroll,
    };
  },
});
</script>

<style scoped>
.pdf-viewer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  background-color: #f5f5f5;
}
.pdf-viewer .pdf-item {
  border-bottom: 1px solid #0050b3;
}
/* 工具栏 start */
.tool-bar {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  line-height: 45px;
  color: #333333;
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
}

.tool-bar .pageNum {
  flex: 1;
  font-size: 17px;
}
/* 工具栏 end */
</style>
