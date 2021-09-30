const btn = document.querySelector(".btn");
const title = document.querySelector("h1");

btn.addEventListener("click", (e) => {
  console.log("Done");
  title.textContent = "Done";
});
