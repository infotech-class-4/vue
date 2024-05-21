<template>
  <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>
          {{ username }}
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-app-bar-title>
          <v-btn @click="onLogout">Logout</v-btn>
        </v-app-bar-title>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  methods: {
    onLogout() {
      this.$store.commit("setUser", undefined);
      window.localStorage.clear();
    },
  },
  computed: {
    username() {
      const userData = this.$store.getters.getUser;
      if (!userData) return ""; // early return pattern

      return userData.name + " " + userData.surname;
    },
  },
};
</script>
