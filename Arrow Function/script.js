let data = [1, 2, 3, 4, 5, 6];
console.log(data);

const newData = data.map(function (item) {
  return item + 3;
});
console.log(newData);

const newData2 = data.map((item) => {
  return item + 3;
});
console.log(newData2);

const newData3 = data.map((item) => item + 3);
console.log(newData3);

console.log(data.filter((x) => x > 2 && x % 2 == 0));
