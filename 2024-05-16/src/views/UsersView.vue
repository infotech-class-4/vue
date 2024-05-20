<template>
  <div class="mb-16">Kullanicilar Sayfasi</div>
  <div>Secilen kullanici: {{ secilenKullanici }}</div>

  <div v-for="item in users" :key="item.id" class="mt-4">
    <UserCard v-bind:userData="item" @user-change="setActiveUser" />
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  methods: {
    setActiveUser(gelenParametre) {
      this.$store.commit("setSelectedUser", gelenParametre);
    },
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    secilenKullanici() {
      return this.$store.getters.getSelectedUser;
    },
  },
};
</script>
