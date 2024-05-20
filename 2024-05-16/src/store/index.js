import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      users: [
        { id: 1, adi: "Murat", yasi: 32, isActive: true },
        { id: 2, adi: "Emine", yasi: 23, isActive: true },
        { id: 3, adi: "Osman", yasi: 45, isActive: true },
        { id: 4, adi: "Zeynep", yasi: 45, isActive: true },
      ],
      secilenKullanici: "",
    };
  },

  mutations: {
    setSelectedUser(state, payload) {
      state.secilenKullanici = payload;
    },
  },

  getters: {
    getUsers(state) {
      return state.users;
    },

    getSelectedUser(state) {
      return state.secilenKullanici;
    },
  },

  actions: {},
});
