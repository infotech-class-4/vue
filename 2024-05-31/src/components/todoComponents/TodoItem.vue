<template>
  <v-card-item>
    <div class="d-flex justify-space-between todo-item pa-4">
      <div>{{ item.todo }}</div>

      <div>
        <v-icon class="icon-button" @click="onEdit">{{ mdiPencil }} </v-icon>
        <v-icon class="icon-button" @click="onDelete">{{ mdiDelete }} </v-icon>
      </div>
    </div>
  </v-card-item>
</template>

<script>
import { mdiPencil, mdiDelete } from "@mdi/js";
export default {
  data() {
    return {
      mdiPencil,
      mdiDelete,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDelete() {
      this.$store.dispatch("todoStore/deleteTodo", this.item._id);
    },
    onEdit() {
      this.$emit("item-edit", this.item);
    },
  },
};
</script>

<style scoped>
.todo-item {
  border: 1px solid rgb(135, 84, 84);
  border-radius: 5px;
}

.icon-button {
  cursor: pointer;
}
</style>
