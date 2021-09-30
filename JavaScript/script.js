let data = [
  {
    charger: "free",
    name: "A",
  },
  {
    charger: "free",
    name: "B",
  },
  {
    charger: "coin",
    name: "C",
  },
  {
    charger: "coin",
    name: "D",
  },
  {
    charger: "free",
    name: "E",
  },
];

const list = document.querySelector(".list");
function init() {
  let result = "";
  data.forEach((x) => {
    result += `<li>${x.name}: ${x.charger}</li>`;
  });
  list.innerHTML = result;
}

init();

const stationFilter = document.querySelector(".filter");
stationFilter.addEventListener("click", (e) => {
  if (e.target.value == undefined) {
    return;
  }

  if (e.target.value === "all") {
    init();
    return;
  } else {
    let result = "";
    data.forEach((x) => {
      if (e.target.value === x.charger) {
        result += `<li>${x.name}: ${x.charger}</li>`;
      }
    });
    list.innerHTML = result;
  }
});

const stationName = document.querySelector(".stationName");
const stationCharger = document.querySelector(".stationCharger");
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  if (stationName.value == "") {
    alert("Empty Station Name");
    return;
  }

  data.push({
    charger: stationCharger.value,
    name: stationName.value,
  });

  stationCharger.value = "";
  stationName.value = "";

  init();
});
