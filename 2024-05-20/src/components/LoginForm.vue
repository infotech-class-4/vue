<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field v-model="username" label="Username"></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block @click="handleLogin">
        Submit
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      username: "murat",
      password: "12345",
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
