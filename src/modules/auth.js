import { store } from "./store.js";

export const auth = (data) => {
  store.user.name = data.name;
  store.user.category = data.category;
  store.user.id = data.id;
  store.user.avatar = data.avatar;

  console.log(store); // todo сделать авторизацию
};
