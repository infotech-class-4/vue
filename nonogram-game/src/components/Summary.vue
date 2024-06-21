<template>
  <div class="d-flex align-center" :class="directionClass">
    <template v-for="(item, index) in list" :key="index">
      <v-btn
        class="cell pa-0"
        flat
        variant="outlined"
        rounded="false"
        elevation="0"
      >
        {{ item }}
      </v-btn>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
    },
  },

  setup(props) {
    const directionClass =
      props.direction == "vertical" ? "flex-column" : "flex-row";

    return {
      list: props.list,
      directionClass,
    };
  },
});
</script>

<style scoped>
.cell {
  border: 1px solid rgb(145, 134, 134);
  min-width: 50px;
  min-height: 50px;
  border-width: 2px;
}
</style>
