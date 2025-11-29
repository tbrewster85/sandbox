console.log("Hello, World!");

let firstname = "John";
let lastname = "Doe";
console.log(firstname);
console.log(lastname);

firstname = "Todd";
lastname = "Brewster";
console.log(firstname);
console.log(lastname);
console.log( `Hello, ${firstname} ${lastname}` );

let age = 11;
console.log(age);

age = 54;
console.log(age);

const pi = 3.14;
console.log(pi);

console.log((4+6+9)/77);

let a = 10;
console.log(a);

a=25;
console.log(a);

let b = 7 * a;
console.log(b);


const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

const mybirthday = "May 29th, 1985";
console.log(mybirthday);

const myInt = 5.735634563456345;
const twodecimalplaces = myInt.toFixed(2);
console.log(myInt);
console.log(twodecimalplaces);

let myNumber = "10";
myNumber = Number(myNumber) + 3;
console.log(myNumber);

let apples= "2"
let oranges = "3"
console.log(apples + oranges)
console.log(+apples + +oranges)
console.log(Number(apples) + Number(oranges))

let n=2;
n += 5;
n *= 2;
console.log(n);

let counter = 2;
counter++;
console.log(counter);

typeof age
console.log(typeof age);

const btn = document.querySelector("button");
const txt = document.querySelector("p");
console.log(btn);

btn.addEventListener("click", updateBtn);

function updateBtn() {
    machinePower = !machinePower;
    console.log(machinePower);
  if (machinePower) {  
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
    
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}

let machinePower = true;