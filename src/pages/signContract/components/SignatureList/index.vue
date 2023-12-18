<template>
  <div
    class="border-t flex p-3 bg-white items-center"
    v-for="(item, index) in list"
    @click="onSelect(item)"
    :key="index"
  >
    <div
      class="w-10 h-10 bg-no-repeat bg-cover bg-center"
      :style="{ backgroundImage: `url(${item.imgUrl})` }"
    ></div>
    <div class="ml-3 text-blue-800">{{ item.holder }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineEmits } from "vue";
import useService from "../../service";

const service = useService();
const emit = defineEmits(["select"]);

const list = ref<Array<any>>([]);

onMounted(async () => {
  const result = await service.getSealList();
  const data = result.data;
  list.value = data;
});

const onSelect = (item: any) => {
  emit("select", item);
};
</script>
