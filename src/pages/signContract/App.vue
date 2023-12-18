<template>
  <div>
    <ComPDFViewer
      ref="PDFViewerRef"
      @onscroll="onPDFViewerScroll"
    ></ComPDFViewer>
    <ComFooter
      :finished="finished"
      :current-page-number="currentPageNumber"
    ></ComFooter>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ComPDFViewer from "../../components/PDFViewer/index.vue";
import ComFooter from "./components/Footer/index.vue";
import useWebviewSDK from "../../hooks/useWebviewSDK";
import useService from "./service";
import { queryParams } from "../../hooks/useLocationSearch";
useWebviewSDK();
const service = useService();
const PDFViewerRef = ref();
const currentPageNumber = ref<number>(1);
const finished = ref<boolean>(false); // 是否阅读完文档内容
const query = queryParams();

onMounted(async () => {
  if (query.productId) {
    const result = await service.getProductInfo(query.productId as String);
    const data = result.data;

    const pdfFileLink = data.signatureAgreementFile;
    const result2 = await service.getPDFBuffer(pdfFileLink);
    const data2 = result2.data;
    if (data2) {
      PDFViewerRef.value.resolvePdf(data2);
    }
  }
});

const onPDFViewerScroll = (state: any) => {
  currentPageNumber.value = state.currentPageNum;
  setDoesReadFinished(state);
};

const setDoesReadFinished = (state: any) => {
  if (state.currentPageNum === state.totalPageNum) {
    finished.value = true;
  } else {
    finished.value = false;
  }
};
</script>

<style>
/* for Chrome */
::-webkit-scrollbar {
  display: none;
}
</style>
