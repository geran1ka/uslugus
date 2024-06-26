import { createElement } from "./createElement";
import { createStars } from "./createStars";

export const createReview = (comments) => {
  const reviewList = createElement("ul", {
    className: "review__list",
  });

  comments.forEach((comment) => {
    const reviewItem = createElement(
      "li",
      {
        className: "review__item",
      },
      reviewList
    );

    createElement(
      "h4",
      {
        className: "review__subtitle",
        textContent: comment.name,
      },
      reviewItem
    );

    const stars = createStars(comment.stars);
    reviewItem.append(stars);
    stars.classList.add("review__stars");
    createElement(
      "p",
      {
        className: "review__text",
        textContent: comment.text,
      },
      reviewItem
    );
  });

  return reviewList;
};

`
<ul class="review__list">
              <li class="review__item">
                <h4 class="review__subtitle">Антон</h4>

                <div class="review__stars stars">
                  <img
                    class="stars__star"
                    src="img/star.svg"
                    alt="Рейтинг специалиста 4 из 5"
                  />
                  <img class="stars__star" src="img/star.svg" alt="" />
                  <img class="stars__star" src="img/star.svg" alt="" />
                  <img class="stars__star" src="img/star.svg" alt="" />
                  <img class="stars__star" src="img/star-o.svg" alt="" />
                </div>

                <p class="review__text">
                  Быстро, профессионально, качественно! Работой очень доволен!
                  Рекомендую!
                </p>
              </li>
`;
