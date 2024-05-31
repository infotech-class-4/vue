<template>
  <v-card-item>
    <v-text-field
      v-if="!isEditMode"
      hide-details="auto"
      label="Yeni TODO Ekle"
      density="compact"
      @keydown.enter="addTodo"
    />

    <v-text-field
      v-if="isEditMode"
      v-model="todoToBeUpdated.todo"
      hide-details="auto"
      label="Düzenle"
      density="compact"
      @keydown.enter="updateTodo"
    />
  </v-card-item>
</template>

<script>
export default {
  props: {
    isEditMode: {
      type: Boolean,
    },
    item: {
      type: Object,
    },
  },
  data() {
    return {
      todoToBeUpdated: {},
    };
  },
  methods: {
    addTodo(e) {
      this.$store.dispatch("todoStore/createTodo", e.target.value);
    },
    updateTodo() {
      console.log(this.todoToBeUpdated);
    },
  },
  mounted() {
    if (this.item?._id) {
      this.todoToBeUpdated = { ...this.item };
    }
  },
};
</script>
