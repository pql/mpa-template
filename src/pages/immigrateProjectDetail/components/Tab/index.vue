<template>
  <div class="tab">
    <div
      :class="activeIndex === index ? 'active' : ''"
      class="tab-item"
      v-for="(item, index) in list"
      :key="index"
      @click="onSelect(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    list: {
      type: Array<String>,
      default: () => [],
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const onSelect = (index: number) => {
      emit("select", index);
    };
    return {
      onSelect,
    };
  },
});
</script>

<style scoped>
.tab {
  display: flex;
}
.tab-item {
  position: relative;
  color: #26364e;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 23px;
  margin: 0 10px;
}

.tab-item:first-child {
  margin-left: 0;
}

.active {
  position: relative;
  color: #26364e;
}

.active::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 4px;
  background: #304aa6;
  bottom: -5px;
  left: 0;
}
</style>
