<template>
  <div>
    <!--<div>{{ name }} {{ surname }} - {{ age }}</div>
    <div>{{ fullname }}</div>
    <br />
    <div v-if="isMarried">Mutluluklar</div>
    <div v-else>Hayatin tadini cikar</div> 
    <button v-on:click="arttir">Arttir</button>
    <button v-on:click="azalt">Azalt</button>
    <br />
    {{ counter }}-->

    <!-- Kullanici adi <br />
    <input type="text" v-model="user.username" /> <br />

    Sifre <br />
    <input type="text" v-model="user.password" /> <br />

    Sifre Tekrari <br />
    <input type="text" v-model="user.confirmPassword" /> <br />
    <button v-bind:disabled="isKaydetBtnActive">Kaydet</button>

    <div v-if="user.password != user.confirmPassword">
      girdiginiz sifreler uyumsuz
    </div> -->

    <!-- <h2>Kurslar</h2>
    <ul>
      <li v-for="(item, index) in courses" :key="index">{{ item }}</li>
    </ul> -->

    <h2>Soru - Cevap</h2>
    <input type="text" v-model="soru" />
    <div>{{ cevap }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Sila",
      surname: "Yilmaz",
      age: 24,
      courses: ["html", "css", "nodejs", "vuejs", "vuejs"],
      address: {
        city: "Berlin",
      },
      isMarried: true,
      counter: 0,
      user: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      soru: "",
      cevap: "",
      like: 12,
    };
  },
  computed: {
    fullname() {
      return `${this.name} ${this.surname}`;
    },
    isKaydetBtnActive() {
      return (
        this.user.password == "" ||
        this.user.password != this.user.confirmPassword
      );
    },
  },
  methods: {
    arttir() {
      this.counter = this.counter + 1;
    },
    azalt() {
      if (this.counter > 0) this.counter--;
    },
  },
  watch: {
    soru(yeniDeger, eskiDeger) {
      if (yeniDeger == "") {
        this.cevap = "";
      } else {
        this.cevap = "Sorunuzu dinliyorum";
      }

      // this.cevap = yeniDeger == "" ? "" : "Sorunuzu dinliyorum";

      if (yeniDeger.includes("?")) {
        this.cevap = "Tamam, sorunuzu aldim, degerlendiriyorum....";
      }

      console.log("eski deger: ", eskiDeger);
      console.log("yeni deger: ", yeniDeger);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #0877e6;
  margin-top: 60px;
}
</style>
