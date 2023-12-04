function printEvenNumb() {
    for (let j = 0; j < 100; j += 2) {
        console.log(j);
    }
}
printEvenNumb();

function printNumb(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        console.log(i);
    }
}

let n1 = 2;
let n2 = 20;
printNumb(n1, n2);

function addTwoNumb(a, b) {
    return a + b;
}

let numb1 = 7;
let numb2 = 3;
let sum = addTwoNumb(numb1, numb2);
console.log("The sum of two numbers is", sum);

function calFunc(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}

let total = calFunc(1, 10);
console.log("The sum between 1 and 10 is", total);