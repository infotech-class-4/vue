<template>
  <v-card-item>
    <div class="d-flex justify-space-between todo-item pa-4">
      <div
        @click="onUpdated"
        class="icon-button"
        :class="item.completed ? 'text-decoration-line-through' : ''"
      >
        {{ item.todo }}
      </div>

      <div>
        <v-icon class="icon-button" @click="onEdit">{{ mdiPencil }} </v-icon>
        <v-icon class="icon-button" @click="onDelete">{{ mdiDelete }} </v-icon>
      </div>
    </div>
  </v-card-item>
</template>

<script>
// dump component: icerisinde fazla mantik bulundurmaz.
// proplarla bazi veriler alir
// yaptigi islemleri $emit ile yayinlar
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
      this.$emit("delete:item", this.item._id);
    },
    onEdit() {
      this.$emit("item-edit", this.item);
    },
    onUpdated() {
      const updatedTodoItem = {
        _id: this.item._id,
        completed: !this.item.completed,
      };

      this.$emit("update:item", updatedTodoItem);
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
