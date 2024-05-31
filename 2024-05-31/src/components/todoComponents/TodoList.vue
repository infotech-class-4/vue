<template>
  <v-card class="mx-auto mt-10" max-width="500">
    <!-- Ekle componenti -->
    <CreateOrUpdateTodo :isEditMode="false" />

    <v-divider color="orange" thickness="3" />

    <!-- TodoItem (v-for) -->
    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :item="todo"
      @item-edit="handleEdit"
    />

    <v-divider color="orange" thickness="3" />
    <CreateOrUpdateTodo
      v-if="editedItem.isEditMode"
      :isEditMode="true"
      :item="editedItem.itemToBeEdited"
    />
  </v-card>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import CreateOrUpdateTodo from "./CreateOrUpdateTodo.vue";

export default {
  components: {
    TodoItem,
    CreateOrUpdateTodo,
  },
  data() {
    return {
      editedItem: {
        isEditMode: false,
        itemToBeEdited: {},
      },
    };
  },
  methods: {
    handleEdit(item) {
      this.editedItem.isEditMode = true;
      this.editedItem.itemToBeEdited = item;
    },
  },

  computed: {
    todos() {
      return this.$store.getters["todoStore/getTodos"];
    },
  },
};
</script>
