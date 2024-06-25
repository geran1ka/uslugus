export const modalController = ({
  modal,
  btnOpen,
  parrentBtns,
  btnClose,
  handlerOpenModal = () => {},
  handlerCloseModal = () => {},
  time = 300,
}) => {
  const handlerElems = parrentBtns
    ? document.querySelector(parrentBtns)
    : document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const data = {
    handlerOpenModal,
    handlerCloseModal,
    onOpenModal(handlerOpenModal) {
      data.handlerOpenModal = handlerOpenModal;
    },
    onCloseModal(handlerCloseModal) {
      data.handlerCloseModal = handlerCloseModal;
    },
    closeModal: (event) => {
      const target = event.target;

      if (
        target === modalElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === "Escape" ||
        event.type === "submit"
      ) {
        modalElem.style.opacity = 0;

        setTimeout(() => {
          modalElem.style.visibility = "hidden";
          data.handlerCloseModal();
        }, time);

        window.removeEventListener("keydown", data.closeModal);
      }
    },
    openModal: async () => {
      await data.handlerOpenModal();

      modalElem.style.visibility = "visible";
      modalElem.style.opacity = 1;
      window.addEventListener("keydown", data.closeModal);
    },
  };

  if (parrentBtns) {
    handlerElems.addEventListener("click", ({ target }) => {
      if (target.closest(btnOpen)) {
        data.openModal();
      }
    });
  } else {
    handlerElems.forEach((btn) => {
      btn.addEventListener("click", data.openModal);
    });
  }

  modalElem.addEventListener("click", data.closeModal);

  return data;
};
