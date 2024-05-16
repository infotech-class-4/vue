<template>
  <div class="mb-16">Kullanicilar Sayfasi</div>

  <div v-for="kullanici in users" :key="kullanici.id" class="mt-4">
    <UserCard :userData="kullanici" />
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [
        { id: 1, adi: "Murat", yasi: 32, isActive: false },
        { id: 2, adi: "Emine", yasi: 23, isActive: true },
        { id: 3, adi: "Osman", yasi: 45, isActive: false },
        { id: 4, adi: "Osman", yasi: 45, isActive: false },
      ],
    };

    // function topla (sayi1, sayi2) {
    //   return 0
    // }
  },
};
</script>
