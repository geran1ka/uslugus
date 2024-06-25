import { API_URL } from "./const.js";
import { createCard } from "./createCard.js";
import { getData } from "./getData.js";

export const renderList = async (url = `${API_URL}/api/service`) => {
  const serviceList = document.querySelector(".services__list");
  serviceList.textContent = "";

  const data = await getData(url);
  console.log("data: ", data);

  const cards = data.map(createCard);

  serviceList.append(...cards);
};
