const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  console.log(e.target);
});

const list = document.querySelector(".list");
list.addEventListener("click", (e) => {
  // console.log(e.target.innerHTML);
  // console.log(e.target.nodeName);
  if (e.target.nodeName == "INPUT") {
    console.log("Button!!!");
  }
});
