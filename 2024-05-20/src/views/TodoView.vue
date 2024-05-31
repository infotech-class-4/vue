<template>TODO sayfasi</template>

<script>
export default {
  created() {
    this.$store.dispatch("todoStore/fetchUserTodos");
  },
};
</script>
