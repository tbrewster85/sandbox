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

let name = "John";
let admin = name;

let ourPlanetName = "Earth";
let nameCurrentVistor;

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

let aa = 10
let bb = "20"
console.log(aa + bb);

aa = 10
bb = 20
console.log(aa + bb);

aa = "10"
bb = "20"
console.log(aa + bb)

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

const mybirthday = "May 29th, 1985";
console.log(mybirthday);

const myInt = 5.735634563456345;
const twodecimalplaces = Number(myInt.toFixed(2));
console.log(myInt);
console.log(twodecimalplaces);
console.log(typeof myInt);
console.log(typeof twodecimalplaces);

let myNumber = "10";
myNumber = Number(myNumber) + 3;
console.log(myNumber);

let apples= "2"
let oranges = "3"
console.log(apples + oranges)
console.log(+apples + +oranges)
console.log(Number(apples) + Number(oranges))

let dd, ee, ff;
dd = ee = ff = 2 + 2
console.log((dd, ee, ff));


// Arithmetic 

let r = 43
r++
console.log(r + " incrementing")

r = 43
++r
console.log(r + " incrementing")

let counter = 2;
counter++;
console.log(counter + " incrementing")

let s = 43
s--
--s
console.log(s + " decrementing")

let d = 5
let e = d ** 2;
console.log(e + " exponentiation")

let n=2;
n += 5;
n *= 3;
console.log(n);

typeof age
console.log(typeof age);

console.log(23+97)
console.log(1+2+3+4+5)
console.log((4+6+9) / 77)

let z = 10
console.log(z)
z=34
console.log(z)

let x = 7 * z
console.log(x)

x++
console.log(x)

x--
console.log(x)

x = Math.pow(z,2)
console.log(x)

let str = "Hello";
let str2 = 'Single quotes are okay too';
let phrase = `can embed another ${str}`;
console.log(phrase)

const name4= "Todd"
const greeting = `Hello, ${name4}`;
console.log(greeting); // "Hello, Todd"

const myStrings = ["this", "is", "an", "array"]  // array that contains four strings.  have to have comma between
console.log(myStrings);

const myStringsJoined = myStrings.join("\n");
console.log(myStringsJoined);

const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); // "Hello, Bob"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);  // "Hello, how are you?"

const greetings3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greetings3}, ${name3}`);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

const song = "Fight the Youth";
const score = 9;
const highScore = 10;
const output = `I like the song ${song}.\nI gave it a score of ${(score/highScore) * 100
  }%.`;
console.log(output)

const newline = `One day you finally 
knew what you had 
to do, and began.`;
console.log(newline);

const newline2 = "One day you finally\nknew what you had\nto do, and began.";
console.log(newline2);

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
const bigmouth = 'I\'ve got no right to take my place…';
console.log(goodQuotes1);
console.log(goodQuotes2);
console.log(bigmouth);

console.log(single);
console.log(double);
console.log(backtick);

let message2 = "hello ";
console.log(message2)

let hello = "Hello, World";
let message3 = hello;
console.log(hello)
console.log(message3)
console.log(message2 + message3)

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

// message is equal to the return value of the function.

const message = favoriteAnimal('Eagle')
console.log(message)


function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Eagle'))

function favoriteBand(band) {
  return band + " is my favorite band!"
}

console.log(favoriteBand('Immortal'))



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


