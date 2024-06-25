import { API_URL } from "./const";
import { renderList } from "./renderList";

export const searchControll = () => {
  const searchForm = document.querySelector(".search");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    renderList(`${API_URL}/api/service?search=${searchForm.search.value}`);
  });
};
