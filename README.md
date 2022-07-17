# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

<img alt="screenshot" src="./images/screenshot.gif" width="480">

### Links

- Solution URL: [Github repo](https://github.com/andrewpatasik/interactive-rating-component-main)
- Live Site URL: [Github pages](https://andrewpatasik.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- DOM API
- Dynamic rendering with vanilla Javascript

### What I learned

In this challenge, I learned to code a little interactivity with Javascript to display a "Thank you" feedback card after the user selected and submitted their rating. To solve this problem two things needed to do:

- Dynamically generate a new card component to show the feedback.
- Listen to the "submit event" to render the new card component whenever the user has selected the rating and clicked submit button.

For the first task, I write a function to generate a new card component using DOM API, this function will create the feedback card HTML elements and append them to the main card container.

```js
const generateFeedbackReceivedComponent = (rating) => {
  const mainElement = document.getElementById("card");
  const feedbackIllustrationElement = document.createElement("img");
  const feedbackResultParagraphElement = document.createElement("p");
  const feedbackHeadingElement = document.createElement("h1");
  const feedbackDetailParagraphElement = document.createElement("p");

  feedbackIllustrationElement.id = "card__feedback__illustration";
  feedbackIllustrationElement.src = "./images/illustration-thank-you.svg";
  feedbackIllustrationElement.alt = "feeback illustration";

  feedbackResultParagraphElement.id = "card__feedback__result";
  feedbackResultParagraphElement.classList.add("text-orange");
  feedbackResultParagraphElement.classList.add("bg-darkblue");
  feedbackResultParagraphElement.classList.add("rounded-pill");
  feedbackResultParagraphElement.textContent = `You selected ${rating.state} out of 5`;

  feedbackHeadingElement.id = "card__feedback__heading";
  feedbackHeadingElement.classList.add("text-white");
  feedbackHeadingElement.textContent = "Thank you!";

  feedbackDetailParagraphElement.id = "card__feedback__detail";
  feedbackDetailParagraphElement.classList.add("text-lightgray");
  feedbackDetailParagraphElement.classList.add("line-height-loose");
  feedbackDetailParagraphElement.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  mainElement.append(
    feedbackIllustrationElement,
    feedbackResultParagraphElement,
    feedbackHeadingElement,
    feedbackDetailParagraphElement
  );
};
```

The function takes an argument which is the user's rating number that should be displayed on the feedback card.

And for the second task, I write a click event handler function that will render the newly generated card component when the submit button is clicked.

```js
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!rating.state) {
    window.alert("you must give rating");
    return;
  }

  renderFeedbackReceivedComponent(rating);
});
```

the ```renderFeedbackReceivedComponent()``` function is responsible for dynamically rendering the new card component. This function will first remove all the children elements in the card container and append the new component elements into the DOM.

```js
export const renderFeedbackReceivedComponent = (rating) => {
  return clearMainElementChildren(() =>
    generateFeedbackReceivedComponent(rating)
  );
};
```

### Continued development

In this project, I tried to write and structure the code as maintainable as it could be with techniques like loosely coupled code. Because this is a rather small project, it helps me to apply those "clean code" techniques in some parts of the code. But I would like to learn more about clean code techniques and apply them in my future projects..

## Author

- Website - [andrewpatasik.github.io](https://andrewpatasik.github.io/)
- Frontend Mentor - [@andrewpatasik](https://www.frontendmentor.io/profile/andrewpatasik)
- Twitter - [@andrewpatasik](https://www.twitter.com/andrewpatasik)