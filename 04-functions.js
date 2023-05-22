function sum(a, b){
    return a + b;
}

console.log(sum(10, 10)); // 20

function multiply(a, b){
    return a * b;
}

console.log(multiply(12, 12)); // 144

const bigMultiply = multiply(5353, 1345);
console.log(bigMultiply);

setTimeout(function (){
    console.log("Hey! You rock !!!");
}, 1000);
setTimeout(() => console.log("Hey! You rock !!!"), 1000);

