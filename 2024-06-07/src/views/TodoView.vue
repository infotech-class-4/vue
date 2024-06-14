<template>
  TODO sayfasi

  <TodoList />
</template>

<script>
import TodoList from "../components/todoComponents/TodoList.vue";
export default {
  components: {
    TodoList,
  },
  created() {
    this.$store.dispatch("todoStore/fetchUserTodos");
  },
};
</script>
