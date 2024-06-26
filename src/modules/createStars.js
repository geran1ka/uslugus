import { comment } from "postcss/lib/postcss";
import starSVG from "../img/star.svg";
import starOSVG from "../img/star-o.svg";

export const createStars = (commentsOrStars) => {
  const stars = Array.isArray(commentsOrStars)
    ? Math.round(
        commentsOrStars.reduce((acc, item) => acc + +item.stars, 0) /
          commentsOrStars.length
      ) || 0
    : commentsOrStars;

  const wrapper = document.createElement("div");
  wrapper.classList.add("stars");

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("img");
    star.classList.add("stars__star");
    if (i === 0) {
      star.alt = `Рейтинг специалиста ${stars} из 5`;
    } else {
      star.alt = "";
    }

    if (stars > i) {
      star.src = starSVG;
    } else {
      star.src = starOSVG;
    }

    wrapper.append(star);
  }

  return wrapper;
};

`
              <div class="service__stars stars">
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
`;
