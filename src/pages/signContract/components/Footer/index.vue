<template>
  <div
    class="fixed h-20 left-3 right-3 bottom-0 flex flex-col items-center justify-center"
  >
    <button
      v-if="!finished"
      @click="onShowSignaturePopup"
      style="background: #0050b3; outline: none"
      class="relative z-10 block w-full py-2 rounded-md text-white border-none"
    >
      选择印章
    </button>
    <button
      v-else
      @click="onFinished"
      style="background: #0050b3; outline: none"
      class="relative z-10 block w-full py-2 rounded-md text-white border-none"
    >
      完成
    </button>
  </div>
  <ComPopup v-model="showSignaturePopup" title="选择印章">
    <ComSignatureList @select="onSignatureItemSelect" />
  </ComPopup>

  <ComDragSign
    :item="currentTarget"
    @confirm="onDrawSeal"
    @cancel="onReChooseSeal"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from "vue";
import ComPopup from "../../../../components/Popup/index.vue";
import ComSignatureList from "../SignatureList/index.vue";
import ComDragSign from "../DragSign/index.vue";

export default defineComponent({
  components: {
    ComPopup,
    ComSignatureList,
    ComDragSign,
  },
  props: {
    finished: {
      type: Boolean,
      default: false, // 是否阅读完
    },
    currentPageNumber: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const componentList = ref<Array<any>>([]); // 构建uniapp端需要的数据
    const currentTarget = ref();
    const state = reactive({
      showSignaturePopup: false,
    });
    const onShowSignaturePopup = () => {
      state.showSignaturePopup = true;
    };
    const onHideSignaturePopup = () => {
      state.showSignaturePopup = false;
    };
    const onFinished = () => {
      const w: any = window;
      const uni = w.uni;
      uni.postMessage({
        data: {
          action: "onSignContract",
          value: {
            componentList: componentList.value,
          },
        },
      });
    };

    onMounted(() => {
      document.addEventListener("UniAppJSBridgeReady", function () {
        const w: any = window;
        const uni = w.uni;
        uni.getEnv(function (res: any) {
          console.log("当前环境：" + JSON.stringify(res));
        });
      });
    });

    const onSignatureItemSelect = (item: any) => {
      onHideSignaturePopup();
      currentTarget.value = item;
    };

    const onDrawSeal = (state: any) => {
      componentList.value.push({
        height: state.y,
        width: state.w,
        pageNum: props.currentPageNumber,
        sealId: currentTarget.value.id,
        sealUrl: currentTarget.value.imgUrl,
        x: state.x,
        y: state.y,
      });
      // Support HiDPI-screens.
      const outputScale = window.devicePixelRatio || 1;
      const canvas = document.getElementById(
        `pdf-canvas-${props.currentPageNumber}`
      ) as HTMLCanvasElement;

      const parentScrollTop =
        document.getElementsByClassName("pdf-viewer")[0].scrollTop;

      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.src = currentTarget.value.imgUrl;
      image.width = state.w;
      image.height = state.h;
      image.onload = function () {
        ctx?.drawImage(
          image,
          Math.floor(state.x * outputScale),
          props.currentPageNumber === 1
            ? Math.floor(state.y + parentScrollTop) * outputScale
            : Math.floor(state.y + parentScrollTop - canvas.offsetHeight) *
                outputScale,
          Math.floor(state.w * outputScale),
          Math.floor(state.h * outputScale)
        );
      };
    };

    const onReChooseSeal = () => {
      currentTarget.value = {};
    };

    return {
      ...toRefs(state),
      onShowSignaturePopup,
      onHideSignaturePopup,
      onFinished,
      onSignatureItemSelect,
      currentTarget,
      onDrawSeal,
      onReChooseSeal,
    };
  },
});
</script>
