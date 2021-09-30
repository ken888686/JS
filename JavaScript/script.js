const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  // 取消標籤預設行為
  e.preventDefault();

  document.querySelector("h1").textContent = "Clicked!!";
});
