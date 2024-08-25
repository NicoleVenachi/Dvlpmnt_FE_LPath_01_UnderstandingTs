
function add(n1:number, n2:number) {
  console.log(typeof num1);

  // //vanilla js
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') throw new Error('Incorrect input');
   
  return n1 + n2; 
}

const num1: number = 5;
// const num1: number = '5'; // result = '52.8'. Without ts, js assumes that since there is a string, the other should be converted to a number before operated it

const num2: number = 3.8; 

const result: number = add(num1, num2);

console.log(result);