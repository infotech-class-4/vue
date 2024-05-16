<template>
  <div class="home">ANA SAYFA</div>
  <div class="ma-16">
    <v-btn v-on:click="onClick"> users sayfasina git</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    onClick() {
      this.$router.push("/users");
      console.log(this);
    },
  },
};
</script>
