import { createStore } from "vuex";
import axios from "axios";
import router from "../router/index";

export default createStore({
  state: {
    loggedInUser: undefined,
  },
  getters: {
    getUser(state) {
      return state.loggedInUser;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.loggedInUser = payload;
    },
  },
  actions: {
    async login({ commit }, paramUser) {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login",
          paramUser
        );
        commit("setUser", response.data);

        window.localStorage.setItem("token", response.data.token);

        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async checkMe({ commit }) {
      const token = window.localStorage.getItem("token");

      if (!token) {
        commit("setUser", undefined);
        return;
      }

      const response = await axios.get("http://localhost:3000/users/check/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      commit("setUser", response.data);
      window.localStorage.setItem("token", response.data.token);
      router.push("/");
    },
  },
});
