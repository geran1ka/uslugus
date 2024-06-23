export const showPassword = () => {
  const inputsPassword = document.querySelectorAll(".form__input_password");

  const btnsEyaPassord = document.querySelectorAll(".form__password-eye");

  btnsEyaPassord.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("form__password-eye_show");
      inputsPassword[index].type = btn.classList.contains(
        "form__password-eye_show"
      )
        ? "text"
        : "password";
    });
  });
};
