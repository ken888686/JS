let x = 100;

console.log(A(5));
// 函式陳述式
function A(x) {
  return x * x;
}

// 函式表達式
const B = function (x) {
  return x * x;
};
console.log(B(5));

// 箭頭函式
const C = (x, y) => {
  return x * x * y;
};
console.log(C(5));
