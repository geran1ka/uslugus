import { commentFormController } from "./commentFormController";
import { API_URL, directions } from "./const";
import { createElement } from "./createElement";
import { createReview } from "./createReview";
import { createStars } from "./createStars";
import { ratingController } from "./ratingController";
import { store } from "./store";

export const renderModal = (parrent, data, closeModal) => {
  parrent.textContent = "";

  console.log(data);

  const body = createElement("div", { className: "modal__body" }, parrent);

  const container = createElement(
    "div",
    { className: "modal__container person" },
    body
  );

  //service

  const service = createElement(
    "div",
    { className: "person__service service service_person" },
    container
  );

  createElement(
    "img",
    {
      className: "service__avatar",
      src: `${API_URL}/${data.avatar}`,
      alt: `аватар ${data.name}`,
    },
    service
  );

  const servicePresent = createElement(
    "div",
    { className: "service__present" },
    service
  );

  createElement(
    "h3",
    {
      className: "service__title",
      textContent: store.category.find((item) => item.title === data.category)
        .rus,
    },
    servicePresent
  );

  createElement(
    "p",
    {
      className: "service__name",
      textContent: `${data.name} ${data.surname[0]}.`,
    },
    servicePresent
  );

  createElement(
    "p",
    {
      className: "service__price",
      textContent: `${directions[data.direction]} ${data.price} ₽`,
    },
    service
  );

  const serviceContacts = createElement(
    "div",
    { className: "service__contacts" },
    service
  );

  const phoneLink = createElement(
    "a",
    {
      className: "service__link service__link_phone",
      href: `tel:${data.phone}`,
    },
    serviceContacts
  );
  phoneLink.innerHTML = `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8098 14.8525L16.4188 12.9706C16.1895 12.8719 15.9392 12.8322 15.6907 12.855C15.4421 12.8779 15.2032 12.9626 14.9958 13.1014L12.648 14.6664C11.2131 13.9685 10.0518 12.8123 9.34753 11.3805L9.34771 11.3803L10.9072 8.99734C11.043 8.79047 11.1253 8.55318 11.1469 8.30669C11.1685 8.0602 11.1287 7.8122 11.031 7.58487L9.1474 3.19006C9.01918 2.89174 8.79778 2.64298 8.51635 2.48103C8.23492 2.31907 7.9086 2.25263 7.58624 2.29166C6.31956 2.45452 5.15548 3.07296 4.31148 4.03144C3.46749 4.98992 3.00129 6.22289 3 7.5C3 14.944 9.05603 21 16.5 21C17.7771 20.9987 19.0101 20.5325 19.9686 19.6885C20.9271 18.8445 21.5455 17.6804 21.7083 16.4137C21.7473 16.0913 21.6808 15.765 21.5188 15.4836C21.3568 15.2022 21.1081 14.9808 20.8098 14.8525Z"
        fill="currentColor"
      />
    </svg>
    <span>${data.phone}</span>
  `;

  const emailLink = createElement(
    "a",
    {
      className: "service__link service__link_email",
      href: `mailto:${data.email}`,
    },
    serviceContacts
  );
  emailLink.innerHTML = `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7491 5.23212C21.7488 5.21825 21.7481 5.20441 21.747 5.19058C21.7461 5.1793 21.745 5.16809 21.7436 5.15696C21.742 5.144 21.74 5.13112 21.7377 5.11823C21.7357 5.10661 21.7334 5.09507 21.7309 5.08365C21.7281 5.07143 21.7249 5.05932 21.7215 5.04723C21.7182 5.03568 21.7149 5.02423 21.7111 5.01292C21.7072 5.00111 21.7028 4.98948 21.6983 4.97786C21.694 4.96674 21.6895 4.95573 21.6847 4.9449C21.6796 4.93346 21.6741 4.92222 21.6684 4.911C21.663 4.90036 21.6574 4.88983 21.6516 4.87949C21.6454 4.8688 21.639 4.85829 21.6324 4.84783C21.6256 4.83728 21.6187 4.82693 21.6115 4.81675C21.6047 4.80716 21.5976 4.79775 21.5903 4.78841C21.5821 4.77791 21.5736 4.76769 21.5648 4.75765C21.5607 4.75291 21.5571 4.74788 21.5529 4.74321C21.5493 4.73928 21.5453 4.73594 21.5416 4.73209C21.5326 4.72261 21.5232 4.71353 21.5137 4.70453C21.5048 4.6962 21.4959 4.68794 21.4868 4.68009C21.4778 4.6724 21.4685 4.66512 21.4591 4.65784C21.4488 4.64987 21.4386 4.64198 21.4281 4.63463C21.4189 4.62825 21.4094 4.62232 21.4 4.61634C21.3888 4.60929 21.3777 4.60227 21.3663 4.59586C21.3563 4.59027 21.346 4.58522 21.3358 4.58009C21.3245 4.57444 21.3133 4.56874 21.3018 4.56368C21.2905 4.55874 21.2791 4.55444 21.2676 4.55004C21.2565 4.54583 21.2455 4.54155 21.2344 4.53789C21.2222 4.53388 21.2098 4.53054 21.1975 4.52715C21.1864 4.52413 21.1753 4.52109 21.1642 4.51859C21.1518 4.51582 21.1392 4.51365 21.1267 4.5115C21.1148 4.50948 21.1029 4.50752 21.091 4.50607C21.0791 4.50463 21.0672 4.50367 21.0552 4.5028C21.0421 4.50184 21.029 4.50108 21.0158 4.50081C21.0105 4.50069 21.0054 4.5 21 4.5H3C2.99496 4.5 2.99011 4.50066 2.98508 4.50076C2.97125 4.50103 2.95743 4.50181 2.94365 4.50284C2.93225 4.50371 2.92094 4.5046 2.90973 4.50595C2.89714 4.50746 2.88464 4.50952 2.8721 4.5117C2.86015 4.51376 2.84821 4.51579 2.83649 4.51842C2.82467 4.52106 2.81305 4.52426 2.80133 4.52747C2.78952 4.53072 2.77771 4.5339 2.76613 4.5377C2.75441 4.54154 2.74288 4.54601 2.73129 4.55045C2.72035 4.55466 2.70937 4.55878 2.69865 4.56347C2.68671 4.56871 2.67503 4.57462 2.66331 4.58052C2.65347 4.58547 2.64362 4.59029 2.63406 4.59565C2.62234 4.60222 2.6109 4.60943 2.59945 4.61669C2.5903 4.6225 2.58105 4.62827 2.57217 4.63447C2.56142 4.64193 2.55102 4.64994 2.54063 4.65804C2.53139 4.66521 2.52223 4.67239 2.51335 4.67999C2.5041 4.68789 2.49518 4.6962 2.48621 4.70464C2.47673 4.71357 2.46744 4.72263 2.45842 4.73204C2.45476 4.73591 2.45073 4.73927 2.44711 4.74321C2.44286 4.74788 2.43928 4.75291 2.43517 4.75765C2.42642 4.7677 2.41791 4.77791 2.40967 4.78841C2.40239 4.79775 2.39529 4.80716 2.38852 4.81675C2.38128 4.82693 2.37437 4.83728 2.36764 4.84783C2.36101 4.85829 2.35455 4.86879 2.34842 4.87948C2.34256 4.88983 2.33702 4.90036 2.33162 4.911C2.32594 4.92221 2.3204 4.93345 2.31528 4.9449C2.31047 4.95572 2.30603 4.96673 2.30173 4.97786C2.29719 4.98948 2.2928 5.00111 2.28886 5.01292C2.28511 5.02423 2.28177 5.03567 2.27852 5.04723C2.27513 5.05932 2.27193 5.07142 2.26913 5.08365C2.26657 5.09507 2.26433 5.1066 2.26227 5.11823C2.25998 5.13112 2.25796 5.144 2.25636 5.15696C2.25499 5.1681 2.25387 5.17931 2.25302 5.19058C2.25192 5.20443 2.25122 5.21827 2.25091 5.23212C2.25078 5.23812 2.25 5.24396 2.25 5.25V18C2.25045 18.3977 2.40864 18.779 2.68984 19.0602C2.97105 19.3414 3.35231 19.4995 3.75 19.5H20.25C20.6477 19.4995 21.029 19.3414 21.3102 19.0602C21.5914 18.779 21.7495 18.3977 21.75 18V5.25C21.75 5.24396 21.7492 5.23812 21.7491 5.23212ZM3.75 6.95496L9.25369 12L3.75 17.0451V6.95496ZM4.92819 18L10.3637 13.0175L11.4932 14.0529C11.6315 14.1797 11.8123 14.25 12 14.25C12.1877 14.25 12.3685 14.1797 12.5068 14.0529L13.6364 13.0175L19.0719 18H4.92819ZM14.7463 12L20.2501 6.95483L20.2509 17.0458L14.7463 12Z"
        fill="currentColor"
      />
    </svg>

    <span>${data.email}</span>
  `;

  const serviceReview = createElement(
    "div",
    {
      className: "service__review",
    },
    service
  );

  const stars = createStars(data.comments);
  stars.classList.add("service__stars");
  serviceReview.append(stars);

  createElement(
    "p",
    {
      className: "service__count-review",
      textContent: data.comments.length,
    },
    serviceReview
  );

  // about
  const about = createElement(
    "div",
    {
      className: "person__about about",
    },
    container
  );

  createElement(
    "h3",
    {
      className: "about__title",
      textContent: "О себе",
    },
    about
  );

  createElement(
    "p",
    {
      className: "about__text",
      textContent: data.about,
      style: "white-space: pre-line",
    },
    about
  );

  // review

  const review = createElement(
    "div",
    {
      className: "person__review review",
    },
    container
  );

  createElement(
    "h3",
    {
      className: "review__title",
      textContent: "Отзывы",
    },
    review
  );
  if (data.comments.length > 3) {
    review.append(createReview(data.comments));
    if (data.comments.length) {
      const btn = createElement(
        "button",
        {
          className: "review__open review__open_list",
          textContent: "Все отзывы",
          type: "button,",
        },
        review
      );

      btn.addEventListener("click", () => {
        review.classList.add("review_show-all");
        btn.remove();
      });
    }
  } else {
    createElement(
      "p",
      {
        className: "review__no-reviews",
        textContent: "Отзывов еще нет",
      },
      review
    );
  }

  //form review
  const form = createElement(
    "form",
    {
      className: "person__form form form_add-review",
    },
    container
  );
  form.dataset.id = data.id;

  const fieldsetRegistration = createElement(
    "fieldset",
    {
      className: "form__fieldset form__fieldset_registration",
    },
    form
  );

  const labelName = createElement(
    "label",
    {
      className: "form__label",
    },
    fieldsetRegistration
  );

  createElement(
    "span",
    {
      className: "form__text",
      textContent: "Имя",
    },
    labelName
  );

  createElement(
    "input",
    {
      className: "form__input",
      name: "name",
    },
    labelName
  );

  const labelPhone = createElement(
    "label",
    {
      className: "form__label",
    },
    fieldsetRegistration
  );

  createElement(
    "span",
    {
      className: "form__text",
      textContent: "Телефон",
    },
    labelPhone
  );

  createElement(
    "input",
    {
      className: "form__input",
      name: "phone",
      type: "number",
    },
    labelPhone
  );

  const labelComment = createElement(
    "label",
    {
      className: "form__label",
    },
    fieldsetRegistration
  );

  createElement(
    "span",
    {
      className: "form__text",
      textContent: "Комментарий",
    },
    labelComment
  );

  createElement(
    "textarea",
    {
      className: "form__textarea",
      name: "text",
    },
    labelComment
  );

  const wrapperSendReview = createElement(
    "div",
    {
      className: "form__rating-wrapper",
    },
    form
  );

  const rating = createElement(
    "div",
    {
      className: "form__rating rating",
    },
    wrapperSendReview
  );
  rating.dataset.stars = "3";

  for (let i = 1; i <= 5; i++) {
    rating.innerHTML += `
      <svg
        class="rating__star"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="currentColor"
        data-rating="${i}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3401 7.00099L16.34 7.001L16.3419 7.0065C16.3844 7.13479 16.3872 7.27292 16.3502 7.40288C16.3131 7.53281 16.2377 7.64857 16.1339 7.73509C16.1339 7.73511 16.1339 7.73513 16.1338 7.73515L12.9535 10.3821L12.7128 10.5824L12.788 10.8864L13.7976 14.97L13.7976 14.9701L13.7991 14.9758C13.8331 15.1065 13.8268 15.2444 13.7811 15.3715C13.7354 15.4985 13.6524 15.6088 13.543 15.6879L13.5412 15.6892C13.4379 15.7646 13.3144 15.807 13.1866 15.8109C13.0589 15.8149 12.9329 15.7802 12.8252 15.7113L12.8236 15.7103L9.27718 13.4636L9.26501 13.4559L9.25241 13.4489C9.20104 13.4204 9.09336 13.3714 8.95079 13.3849C8.83541 13.3959 8.75188 13.4438 8.71258 13.4704L5.42744 15.5516L5.4266 15.5521C5.29892 15.6333 5.14975 15.6743 4.99849 15.6696C4.84724 15.6648 4.7009 15.6147 4.57853 15.5257L4.57737 15.5248C4.44813 15.4314 4.35012 15.3011 4.29617 15.151C4.24221 15.0009 4.23483 14.838 4.27499 14.6837L4.27567 14.681L5.22599 10.9429L5.30306 10.6398L5.06418 10.4378L1.86935 7.7374L1.86936 7.73739L1.86667 7.73515C1.76284 7.64862 1.68746 7.53284 1.65036 7.40288C1.61326 7.27292 1.61615 7.13479 1.65866 7.0065L1.65869 7.00651L1.66045 7.00099C1.70017 6.87628 1.77656 6.76644 1.87965 6.6858C1.98274 6.60515 2.10774 6.55746 2.23835 6.54893L6.391 6.27922L6.70549 6.25879L6.82272 5.96626L8.39486 2.04304L8.39488 2.04305L8.39682 2.03808C8.44402 1.91654 8.5268 1.81208 8.63432 1.73835C8.74174 1.66469 8.86887 1.62513 8.99911 1.62482H8.99962C8.99965 1.62482 8.99968 1.62482 8.99971 1.62482C9.1303 1.62486 9.25784 1.66434 9.36562 1.73809C9.47342 1.81186 9.55642 1.91647 9.60375 2.03822L9.60374 2.03822L9.60508 2.0416L11.1542 5.9423L11.2702 6.23458L11.5839 6.25653L15.7598 6.54877L15.7622 6.54893C15.8928 6.55746 16.0178 6.60515 16.1209 6.6858C16.2239 6.76644 16.3003 6.87628 16.3401 7.00099Z"
          stroke="#FFD600"
        />
      </svg>
    `;
  }

  const inputHidden = createElement(
    "input",
    {
      className: "rating__input",
      type: "hidden",
      name: "stars",
    },
    rating
  );

  ratingController(rating, inputHidden);

  createElement(
    "button",
    {
      className: "form__submit form__submit_comment",
      textContent: "Опубликовать отзыв",
    },
    wrapperSendReview
  );

  const btnClose = createElement(
    "button",
    {
      className: "modal__close",
      type: "button",
    },
    container
  );
  btnClose.innerHTML = `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 5.25L5.25 18.75"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.75 18.75L5.25 5.25"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;

  commentFormController(form, closeModal);
};
