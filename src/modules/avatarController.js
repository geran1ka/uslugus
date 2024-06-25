import Croppie from "croppie";
import "croppie/croppie.css";

export const avatarController = ({ inputFile, uploadResult }) => {
  const upload = document.querySelector(inputFile);

  const avatar = document.querySelector(uploadResult);
  avatar.style.display = "none";

  const crp = new Croppie(avatar, {
    boundary: { width: 300, height: 300 },
    viewport: { width: 200, height: 200, type: "circle" },
  });

  const readFile = ({ target }) => {
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        avatar.style.display = "block";
        crp.bind({
          url: event.target.result,
        });
      });
      reader.readAsDataURL(target.files[0]);
    }
  };

  upload.addEventListener("change", readFile);

  return crp;
};
