<template>
  <div v-if="item" class="">
    <Vue3DraggableResizable
      :initW="100"
      :initH="100"
      v-model:x="x"
      v-model:y="y"
      v-model:w="w"
      v-model:h="h"
      v-model:active="active"
      :draggable="true"
      :resizable="true"
      @activated="onThrottleDrag('activated')"
      @deactivated="onThrottleDrag('deactivated')"
      @drag-start="onThrottleDrag('drag-start')"
      @resize-start="onThrottleDrag('resize-start')"
      @dragging="onThrottleDrag('dragging')"
      @resizing="onThrottleDrag('resizing')"
      @drag-end="onThrottleDrag('drag-end')"
      @resize-end="onThrottleDrag('resize-end')"
    >
      <img :src="item && item.imgUrl" />
      <img
        v-if="item && item.imgUrl"
        @click="onCancel"
        class="absolute -top-8 -left-6 w-8 h-8"
        src="../../../../assets/close.png"
      />
      <img
        v-if="item && item.imgUrl"
        @click="onConfirm"
        class="absolute -bottom-6 -right-6 w-8 h-8"
        src="../../../../assets/select.png"
      />
    </Vue3DraggableResizable>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref } from "vue";
import Vue3DraggableResizable from "vue3-draggable-resizable";
//default styles
import "vue3-draggable-resizable/dist/Vue3DraggableResizable.css";
import { Throttle } from "../../../../hooks/useTools";

export default {
  components: { Vue3DraggableResizable },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const throttle = new Throttle();
    const state = reactive({
      x: 20,
      y: 50,
      h: 50,
      w: 50,
      active: false,
    });
    const onThrottleDrag = (e: any) => {
      throttleDrag(e);
    };
    const throttleDrag = throttle.use(() => {}, 800);
    const onConfirm = () => {
      emit("confirm", state);
    };
    const onCancel = () => {
      emit("cancel", state);
    };
    return {
      ...toRefs(state),
      onConfirm,
      onCancel,
      onThrottleDrag,
    };
  },
};
</script>
