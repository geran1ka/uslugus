import "./index.html";
import "./index.scss";
import { choicesController } from "./modules/choicesController.js";
import { modalController } from "./modules/modalController.js";
import { renderList } from "./modules/renderList.js";
import { searchControll } from "./modules/searchControll.js";
import { selectController } from "./modules/selectController.js";
import { showPassword } from "./modules/showPassword.js";

const init = () => {
  modalController({
    modal: ".modal_sign-in",
    btnOpen: ".header__auth-btn_sign-in",
    btnClose: ".modal__close",
  });

  modalController({
    modal: ".modal_sign-up",
    btnOpen: ".header__auth-btn_sign-up",
    btnClose: ".modal__close",
  });

  const modalPerson = modalController({
    modal: ".modal_person",
    btnOpen: ".service",
    parrentBtns: ".services__list",
    handlerOpenModal: () => {
      const comments = document.querySelectorAll(".review__text");
      comments.forEach((comment) => {
        if (comment.scrollHeight > 38) {
          const btn = document.createElement("button");
          btn.classList.add("review__open");
          btn.textContent = "Развернуть";

          comment.after(btn);

          btn.addEventListener("click", () => {
            comment.classList.toggle("review__text_open");
            btn.textContent = comment.classList.contains("review__text_open")
              ? "Свернуть"
              : "Развернуть";
          });
        }
      });
    },
    btnClose: ".modal__close",
  });

  selectController({
    openBtn: ".category__title",
    openBlock: ".category__list",
    closeBtn: ".category__btn",
    handlerChange: (value) => {
      console.log(value);
    },
  });

  showPassword();
  choicesController();
};

init();
