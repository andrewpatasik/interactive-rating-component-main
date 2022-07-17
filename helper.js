export const useState = () => {
  let state = null;

  return {
    state,
    setState: function (value) {
      this.state = value;
    },
  };
};

export const renderFeedbackReceivedComponent = (rating) => {
  return clearMainElementChildren(() =>
    generateFeedbackReceivedComponent(rating)
  );
};

const clearMainElementChildren = (callback) => {
  const mainElement = document.getElementById("card");

  let mainElementChild = mainElement.firstChild;
  while (mainElementChild) {
    mainElement.removeChild(mainElementChild);
    mainElementChild = mainElement.firstChild;
  }

  mainElement.classList.add("flex-center");

  return callback();
};

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
  feedbackResultParagraphElement.classList.add("bg-verydarkblue");
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