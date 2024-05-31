import axios from "axios";

export default {
  namespaced: true,
  state: {
    todos: [],
  },
  mutations: {
    setUserTodos(state, payload) {
      state.todos = payload;
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  actions: {
    async fetchUserTodos({ commit, rootGetters }) {
      const user = rootGetters["userStore/getUser"];

      try {
        const response = await axios.post(
          "http://localhost:3000/todos/findall",
          {
            userId: user.id,
          },
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );

        commit("setUserTodos", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
