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
const query = queryParams();
const service = useService();
const PDFViewerRef = ref();

onMounted(async () => {
  const pdfFileLink = query.pdfLink as string;
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
