const title = document.querySelectorAll("h1");
let count = 0;

const btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", (e) => {
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

const btnClick = document.querySelector(".btn-click");
btnClick.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.clientX);
});

// 可查詢目前的標籤
console.log(btnClick.nodeName);
