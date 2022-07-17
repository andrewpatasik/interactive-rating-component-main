import { useState, renderFeedbackReceivedComponent } from "./helper.js";

window.addEventListener("DOMContentLoaded", () => {
  const formElement = document.getElementById("card__rating__form");
  const submitButton = document.getElementById("card__rating__form__button");
  const listElement = document.querySelectorAll(".scale");
  const outsideListElement = window;

  let rating = useState();

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!rating.state) {
      window.alert("you must give rating");
      return;
    }

    renderFeedbackReceivedComponent(rating);
  });

  submitButton.addEventListener("click", (event) => {
    // ! required to stop event bubbling to clickOutside event
    event.stopPropagation();
  });

  listElement.forEach((list) => {
    list.addEventListener("click", (event) => {
      event.stopPropagation();
      const element = event.target;
      const value = element.textContent;

      rating.setState(value);
    });
  });

  outsideListElement.addEventListener("click", () => {
    // ! reset rating state when user clicked outside
    rating.setState(null);
  });
});
