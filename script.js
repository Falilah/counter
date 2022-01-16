"strict";

const displayNumber = document.querySelector(".input-value");
const reset = document.querySelector(".btn-reset");
const increase = document.querySelector(".btn-increase");
const decrease = document.querySelector(".btn-decrease");

let convertType = (displayNumber.textContent = 0);
let countValue = convertType;

increase.addEventListener("click", function () {
  countValue++;
  updateCounter();
});
decrease.addEventListener("click", function () {
  console.log(countValue);
  countValue--;
  updateCounter();
});

const updateCounter = function () {
  displayNumber.innerHTML = countValue;
};

reset.addEventListener("click", function () {
  displayNumber.innerHTML = 0;
  countValue = 0;
});
