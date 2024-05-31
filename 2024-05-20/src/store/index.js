import { createStore } from "vuex";
import userStore from "./userStore";
import todoStore from "./todoStore";
// barrel file

export default createStore({
  modules: {
    userStore,
    todoStore,
  },
});
