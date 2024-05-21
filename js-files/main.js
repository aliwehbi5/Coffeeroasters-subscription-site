const choices = document.querySelectorAll(".choices");
const questionList = document.querySelectorAll(".questions-list .text");
const spans = document.querySelectorAll(".summary span");
const disabledBtn = document.querySelector(".main-btn.disabled");
const priceBtn = document.querySelector(".give-price");
const orderSummary = document.querySelector(".order-summary");
const orderH2 = document.querySelector(".order-h2");
const price = document.querySelector(".order-summary .price");
const checkoutBtn = document.querySelector(".checkout-btn");
const data = {
  "250g": {
    "Every week": 7.2,
    "Every 2 weeks": 9.4,
    "Every month": 12.0,
  },
  "500g": {
    "Every week": 13.0,
    "Every 2 weeks": 17.5,
    "Every month": 22.0,
  },
  "1000g": {
    "Every week": 22.0,
    "Every 2 weeks": 32.0,
    "Every month": 42.0,
  },
};

choices.forEach((choices) => {
  let choicesList = choices.querySelectorAll(".choice");
  choicesList.forEach((choice) => {
    choice.addEventListener("click", function () {
      choicesList.forEach((choice) => {
        choice.classList.remove("active");
      });
      choice.classList.add("active");
      document.querySelector(`span.${choices.classList[1]}`).textContent =
        choice.querySelector("h4").textContent;
      let counter = 0;
      spans.forEach((span) => {
        if (span.textContent !== "_____") {
          counter++;
        }
      });
      if (counter == spans.length) {
        disabledBtn.classList.remove("disabled");
      }
    });
  });
});

questionList.forEach((question) => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("slide-down");
    question.querySelector("img").classList.toggle("rotated");
  });
});

priceBtn.addEventListener("click", () => {
  if (!priceBtn.classList.contains("disabled")) {
    orderSummary.classList.add("show");
    orderSummary.querySelector("h2").innerHTML = orderH2.innerHTML;
    document.body.classList.add("black-bg");
    price.textContent =
      "$" +
      (+data[document.querySelector("span.much-you-like").textContent][
        document.querySelector("span.deliver").textContent
      ].toFixed(2) +
        10) +
      "/ mo";
  }
});

checkoutBtn.addEventListener("click", () => {
  location.reload();
});
