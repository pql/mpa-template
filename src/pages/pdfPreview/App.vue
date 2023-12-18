<template>
  <div>
    <ComPDFViewer ref="PDFViewerRef" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ComPDFViewer from "../../components/PDFViewer/index.vue";
import useService from "./service";
import { queryParams } from "../../hooks/useLocationSearch";
const service = useService();
const PDFViewerRef = ref();
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
</script>

<style>
/* for Chrome */
::-webkit-scrollbar {
  display: none;
}
</style>
