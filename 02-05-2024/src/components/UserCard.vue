<template>
  <v-card class="mx-auto" max-width="344" :border="true">
    <v-card-text>
      <div>{{ userData.adi }}</div>
      <div>Yasi: {{ userData.yasi }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="black" variant="tonal" :disabled="!userData.isActive">
        Tikla
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      default: () => {
        return { id: 4, adi: "Örnek kullanici", yasi: 100, isActive: false };
      },
    },
  },
};
</script>
