<template>
  <div>
    <ComPDFViewer ref="PDFViewerRef" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ComPDFViewer from "../../components/PDFViewer/index.vue";
import useService from "./service";
const service = useService();
const PDFViewerRef = ref();

onMounted(async () => {
  const pdfFileLink =
    "https://d11he24itru2mu.cloudfront.net/2022-09-19-253b095b-085f-40af-bc76-752938de62e3.pdf";
  const result = await service.getPDFBuffer(pdfFileLink);
  const data = result.data;
  if (data) {
    PDFViewerRef.value.resolvePdf(data);
  }
});
</script>

<style>
/* for Chrome */
::-webkit-scrollbar {
  display: none;
}
</style>
