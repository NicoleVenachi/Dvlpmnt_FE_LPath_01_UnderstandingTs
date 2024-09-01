function add(n1, n2, showResult, phrase) {
    console.log(typeof num1);
    // //vanilla js
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') throw new Error('Incorrect input');
    if (showResult) {
        console.log("".concat(phrase, " ").concat(n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
// const num1: number = '5'; // result = '52.8'. Without ts, js assumes that since there is a string, the other should be converted to a number before operated it
var num2 = 3.8;
var printResult = true;
var resultPhrase = 'Result is: \t';
add(num1, num2, printResult, resultPhrase);
