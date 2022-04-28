const weight = document.querySelectorAll(".box");
const counter = document.querySelector(".number");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");

var count = 1;
increaseBtn.addEventListener("click", function () {
  counter.textContent = ++count;
});
decreaseBtn.addEventListener("click", function () {
  if (count > 1) {
    counter.textContent = --count;
  } else {
    count = 1;
  }
});

weight.forEach((element) => {
  element.addEventListener("click", function () {
    weight.forEach((box) => {
      box.classList.remove("selected");
    });
    element.classList.add("selected");
    console.log(`done`);
  });
});
