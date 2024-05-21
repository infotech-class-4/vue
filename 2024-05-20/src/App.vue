<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  created() {
    console.log("created calisti");

    // const user = this.$store.getters.getUser;
    // if (!user) this.$router.push("/login");

    this.$store.dispatch("checkMe");
  },
  mounted() {
    console.log("mounted calisti");
  },
  beforeCreate() {
    console.log("before created calisti");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
