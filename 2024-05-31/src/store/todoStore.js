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

    async deleteTodo({ dispatch, rootGetters }, todoId) {
      const token = rootGetters["userStore/getUser"].token;

      try {
        await axios.delete(`http://localhost:3000/todos/${todoId}/delete`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch("fetchUserTodos");
      } catch (error) {
        console.log(error);
      }
    },

    async createTodo({ dispatch, rootGetters }, paramTodo) {
      const user = rootGetters["userStore/getUser"];

      const data = {
        userId: user.id,
        todo: paramTodo,
      };

      try {
        await axios.post(`http://localhost:3000/todos/create`, data, {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        dispatch("fetchUserTodos");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
