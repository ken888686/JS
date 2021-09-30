const btn = document.querySelector(".btn");
const title = document.querySelectorAll("h1");
let count = 0;

btn.addEventListener("click", (e) => {
  count++;
  title.forEach((element) => {
    element.textContent = count;
  });
});

const btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", () => {
  count--;
  title.forEach((element) => {
    element.textContent = count;
  });
});
