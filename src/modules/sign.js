import { auth } from "./auth";
import { avatarController } from "./avatarController";
import { API_URL } from "./const";
import { createCard } from "./createCard";
import { postData } from "./postData";

export const signInController = (cb) => {
  const form = document.querySelector(".form-sign-in");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const dataResponse = await postData(
      `${API_URL}/api/service/signin`,
      data,
      "post"
    );

    if (dataResponse.errors) {
      console.log(dataResponse.errors); // todo обработка ошибки

      return;
    }

    cb(event);

    auth(dataResponse);
  });
};

export const signUpController = (cb) => {
  const form = document.querySelector(".form-sign-up");

  const crp = avatarController({
    inputFile: ".avatar__input",
    uploadResult: ".avatar__result",
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.password[0].value !== form.password[1].value) {
      console.log("Пароли не совпадают"); // todo обработка ошибки
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.avatar = await crp.result({
      type: "base64",
      size: "viewport",
    });

    const dataResponse = await postData(
      `${API_URL}/api/service/signup`,
      data,
      "post"
    );

    if (dataResponse.errors) {
      console.log(dataResponse.errors); // todo обработка ошибки
      dataResponse.errors.forEach((error) => {
        form[error.field].style.border = "1px solid red";
      });
      return;
    }

    const servicesList = document.querySelector(".services__list");
    servicesList.append(createCard(dataResponse));
    auth(dataResponse);
    form.reset();
    crp.hideAvatar();
    cb(event);
  });
};
