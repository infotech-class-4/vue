<template>
  <v-btn
    class="cell pa-0"
    flat
    variant="outlined"
    rounded="false"
    elevation="0"
  >
    <v-icon :icon="statusIcon" size="45px"></v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    statusIcon() {
      return this.status == true ? "mdi-square" : "mdi-close";
    },
  },
};
</script>

<style scoped>
.cell {
  min-width: 50px;
  min-height: 50px;
  border-radius: 1px;
}
</style>
