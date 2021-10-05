let data = [
  {
    content: "待辦事項一",
  },
  {
    content: "Get up",
  },
  {
    content: "Sleep",
  },
  {
    content: "Play",
  },
];

const list = document.querySelector(".list");

// 顯示現有事項
function renderData(data) {
  let str = "";
  data.forEach(function (value, index) {
    str += `<li key="${index}">${value.content} <input type="button" class="delete"value="Delete"></li>`;
  });
  list.innerHTML = str;
}
