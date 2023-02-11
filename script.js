const buttons = document.querySelectorAll(".list__item");
const submit = document.querySelector(".submit");
const rating = document.querySelector(".selected-rating");
const card = document.querySelector(".inner-model");
const success = document.querySelector(".inner-model-completed");

let value;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttons.forEach((button) => button.classList.remove("rating-numbers-selected"));
      e.target.classList.add("rating-numbers-selected");
      value = e.target.textContent;
    });
});

submit.addEventListener("click", () => {
    console.log('value', value);
    rating.textContent = value;
    card.style.display = "none";
    success.style.display = "flex";
  });