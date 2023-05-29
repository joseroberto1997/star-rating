// write your JavaScript here
const stars = Array.from(document.querySelectorAll(".container__rating-star"));
const descriptionRating = document.querySelector(
  ".container__rating-description"
);

const descriptionAvaliations = [
  "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.",
];

let clickedIndex = -1;
let mouseOverIndex = -1;

function handleClickStar(index) {
  descriptionRating.innerHTML = "";
  clickedIndex = index;

  stars.forEach((item, i) => {
    item.src =
      i <= clickedIndex
        ? "../images/star-selected.png"
        : "../images/star-empty.png";

    descriptionRating.innerHTML = descriptionAvaliations[clickedIndex];
    descriptionRating.classList.add("show");
  });
}

function handleMouseOverStar(index) {
  if (clickedIndex !== -1) return;

  let mouseOverIndex = index;

  stars.forEach((item, i) => {
    item.src =
      i <= mouseOverIndex
        ? "../images/star-selected.png"
        : "../images/star-empty.png";
  });
}

stars.forEach((star, index) => {
  star.addEventListener("click", () => handleClickStar(index));
  star.addEventListener("mouseover", () => handleMouseOverStar(index));
});
