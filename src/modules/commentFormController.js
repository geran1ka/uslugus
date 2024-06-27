import { API_URL } from "./const.js";
import { postData } from "./postData.js";

export const commentFormController = (form, cb) => {
  console.log("form: ", form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    cb(e);

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    postData(`${API_URL}/api/service/comment/${form.dataset.id}`, data);
  });
};
