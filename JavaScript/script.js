// querySelector: 找到第一個就停了
// querySelectorAll: 會選擇所有相同的標籤

const myLink = document.querySelectorAll("a");
console.log(myLink);
myLink[1].setAttribute("class", "red");
