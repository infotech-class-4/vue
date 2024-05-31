<template>
  <div>Ana sayfamiz</div>
  <div>
    <v-btn @click="onClick" class="mt-4">TODO SAYFASI</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    onClick() {
      this.$router.push("/todo");
    },
  },
};
</script>
