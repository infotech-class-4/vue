<template>
  <v-switch v-model="selection" hide-details @update:model-value="onChange" />
  <Cell :status="selection" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Cell from "./Cell.vue";

const emit = defineEmits(["selection:update"]);
const selection = ref(false);

const onChange = () => {
  emit("selection:update", selection.value);
};
</script>
