<template>
  <v-card-item>
    <v-text-field
      v-if="!isEditMode"
      hide-details="auto"
      label="Yeni TODO Ekle"
      density="default"
      base-color="red"
      @keydown.enter="addTodo"
    />

    <v-text-field
      v-if="isEditMode"
      v-model="updateTodo.todo"
      hide-details="auto"
      label="Düzenle"
      density="compact"
      @keydown.enter="onUpdateTodo"
      @update:focused="onClickOutside"
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
      todoText: "",
      updateTodo: {},
    };
  },
  methods: {
    addTodo(e) {
      this.$store.dispatch("todoStore/createTodo", e.target.value);
    },
    onUpdateTodo() {
      this.$store.dispatch("todoStore/updateTodo", this.updateTodo);
      this.$emit("closeEditMode");
    },
    onClickOutside(focused) {
      if (!focused) {
        this.updateTodo = {};
        this.$emit("closeEditMode");
      }
    },
  },
  mounted() {
    if (this.item?._id) {
      this.updateTodo = { ...this.item };
    }
  },
};
</script>
