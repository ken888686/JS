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

let done = [
  {
    content: "Done",
  },
];

const list = document.querySelector(".list");
const doneList = document.querySelector(".done-list");
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");

// 顯示現有事項
function renderData() {
  let str = "";
  data.forEach(function (value, index) {
    str += `<li key="${index}">${value.content} <input type="button" data-num=${index} class="done" value="Done"><input type="button" data-num=${index} class="delete" value="Delete"></li>`;
  });
  list.innerHTML = str;

  str = "";
  done.forEach(function (value, index) {
    str += `<li>${value.content} <input type="button" data-num="${index}" class="undo" value="Undo"><input type="button" data-num="${index}" class="delete" value="Delete"></li>`;
  });
  doneList.innerHTML = str;
}
renderData();

// Save
save.addEventListener("click", function (e) {
  if (txt.value == "") {
    alert("Please enter");
    return;
  }

  let obj = {};
  obj.content = txt.value;
  data.push(obj);
  renderData();
  txt.value = "";
});

// Delete
list.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "delete") {
    console.warn("Click Delete");
    return;
  }
  let num = e.target.getAttribute("data-num");
  data.splice(num, 1);
  renderData();
});

doneList.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "delete") {
    console.warn("Click Delete");
    return;
  }
  let num = e.target.getAttribute("data-num");
  done.splice(num, 1);
  renderData();
});

// Done
list.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "done") {
    return;
  }

  let num = e.target.getAttribute("data-num");
  done.push(data[num]);
  data.splice(num, 1);

  renderData();
});

//Undo
doneList.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "undo") {
    return;
  }

  let num = e.target.getAttribute("data-num");
  data.push(done[num]);
  done.splice(num, 1);

  renderData();
});
