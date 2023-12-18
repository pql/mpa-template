<template>
  <!-- 遮罩层 start-->
  <div
    v-if="modelValue"
    @click="onClose"
    class="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50"
    :class="[
      mode === 'center'
        ? 'flex items-center justify-center'
        : mode === 'bottom'
        ? 'flex items-end justify-center'
        : '',
    ]"
  >
    <div
      class="bg-white z-10 max-h-full"
      :style="{
        width: mode === 'center' ? width : '100%',
        borderRadius: borderRadius,
      }"
    >
      <div class="text-center py-2 relative">
        <div>{{ title }}</div>
        <img
          v-if="closeable"
          @click="onClose"
          class="absolute w-5 h-5 top-2 right-3"
          src="../../assets/close.png"
        />
      </div>
      <div class="overflow-y-auto" @click.stop>
        <slot></slot>
      </div>
    </div>
  </div>
  <!-- 遮罩层 end-->
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "bottom", // 弹框位置，可选值 center, bottom,
    },
    title: {
      type: String,
      default: "标题", // 弹框标题
    },
    closeable: {
      type: Boolean,
      default: true, // 是否显示关闭按钮
    },
    width: {
      type: String,
      default: "80%",
    },
    borderRadius: {
      type: String,
      default: "4px",
    },
  },
  setup(props, { emit }) {
    const onClose = () => {
      emit("update:modelValue", false);
    };
    return {
      onClose,
    };
  },
});
</script>
