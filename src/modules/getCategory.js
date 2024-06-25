import { API_URL } from "./const.js";
import { getData } from "./getData.js";
import { store } from "./store.js";

export const getCategory = async () => {
  const data = await getData(`${API_URL}/api/category`);
  store.category = data;
};
