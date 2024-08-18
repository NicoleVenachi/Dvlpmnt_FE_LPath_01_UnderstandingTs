function add(n1, n2) {
    return n1 + n2; // without ts, js assumes the result is maintains the first element type
}
var num1 = 5;
// const num1: number = '5'; // result = '52.8'
var num2 = '3.8';
// const num2: number = '3.8'; // result = 8.8
var result = add(num1, num2);
console.log(result);
