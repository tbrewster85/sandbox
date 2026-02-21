console.log("Hello, World!");

//     || (OR)

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

// TRUTHY VALUES FROM LIST OF VARIABLES. LOG WILL SHOW FIRST TRUE VALUE.  *QUESTION FOR RYAN*

console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

console.log( null || 2 || undefined );

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// SHORT-CIRCUIT EVALUATION  *QUESTION FOR RYAN

true || console.log("not printed");
false || console.log("printed");

// IF

let hour = 9
if (hour < 10 || hour >18) {
  console.log("The office is closed.");
}

let hour2 = 12
let isWeekend = true;

if (hour2 <10 || hour >18 || isWeekend) {
  console.log("The office is closed.");
}


//      && (AND)


let hour3 = 12;
let minute3 = 30;

if (hour3 == 12 && minute3 == 30) {
  console.log("The time is 12:30");  
}


let hour4 = 12;
let minute4 = 30;

if (hour4 == 12 && minute4 == 30) {
  console.log("The time is ${hour4} ${minute4}");  // WHY DOESNT THIS WORK? Need to embed.
}

if (1 && 0) { // evaluated as true && false
  alert( "won't work, because the result is falsy" );
}


console.log( 1 && 0 ); // 0    // if the first operand is truthy, AND returns the second operand:
console.log( 1 && 5 ); // 5 

console.log( null && 5 ); // null  //if the first operand is falsy, AND returns it. The second operand is ignored
console.log( 0 && "no matter what" ); // 0

let x = 1;
(x > 0) && console.log( 'Greater than zero!' );  // DONT DO THIS!  QUESTION FOR RYAN? HOW IS $$ REPLACING IF?  

let x2 = 1;
if (x2 > 0) {
  console.log('Greater than zero!')   //  DO THIS INSTEAD!
}


//     ! (NOT)

console.log( !true ); // false
console.log( !0 ); // true

console.log( !!"non-empty string" ); // true
console.log( !!null ); // false

console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false


// TEST

console.log( null || 2 || undefined );  // 2
alert( alert(1) || 2 || alert(3) ); // 1 then 2
console.log( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1 then undefined
console.log( null || 2 && 3 || 4 );  // 3

// Which of these gets executed?

if (-1 || 0) console.log( 'first' );
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' );

// AGE RANGE TEST

let age = 27
if (age >= 14 && age <= 90) {
  console.log("True!")
}

let age2 = 2
if (!(age2 >= 14 && age2 <= 90))
  console.log("True!")


// PROMPT

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

// EVENT LISTENER

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
