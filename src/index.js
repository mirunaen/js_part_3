let example = "Sara";
console.log(example);
function number(val) {
  if (val === 0) {
    return "Hello World";
  } else {
    example = "George";
    return example;
  }
}
console.log(number(3));

let name = ["Dylan", 3, 4, 5, 6];

console.log(typeof name);

let firstName = "Elena";
let middleName = "Miruna";
let lastName = "Nedelcu";

console.log(`${firstName} ${middleName} ${lastName} `.toUpperCase());

let myName = [
  {
    firstName: "Miruna",
    secondName: "Elena",
    thridName: ["Nedelcu", "Cameron"]
  },
  {
    name: "Olga",
    secondName: "Nedelcu",
    age: 17
  }
];
console.log(myName[1].age);

let example1 = {
  firstName: "Dylan",
  lastName: "Israel",
  address: {
    city: "Austin",
    state: "Texas"
  },
  age: 30,
  cats: ["Milo", "Tito", "Achieles"]
};

example1.age = 31;

console.log(Object.values(example1));
console.log(example1.hasOwnProperty("firstName2"));

let hisName = [
  {
    firstName: "Miruna",
    secondName: "Elena",
    brothers: 7,
    mothers: 1,
    thridName: ["Nedelcu", "Cameron"]
  },
  { name: "Olga", secondName: "Nedelcu", age: 17 }
];
console.log(Object.keys(hisName[1]));
console.log(Object.values(hisName));
console.log(name.hasOwnProperty("secondName"));

let herExample = [2, 4, 5, 6, 4];
herExample.push(2);
herExample.pop();
herExample.unshift();
herExample[2] = 3;
herExample.forEach(a => {
  console.log(a);
});

console.log(herExample);
let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numArray.length; i++) {
  total += numArray[i];
}

console.log(total);
let hisExample = [2, 4, 5, 6, 4];
hisExample.push(2);
hisExample.pop();
hisExample.unshift();
hisExample[2] = 3;
hisExample.forEach(a => {
  console.log(a);
});

console.log(hisExample);

let count = 0;

do {
  count++;

  if (count >= 20) {
    break;
  }
} while (false);

console.log(count);

const personalInformation = {
  firstName: "Dylan",
  lastName: "Israel",
  city: "Austin",
  state: "Texas",
  zipCode: 73301
};

const { firstName: fn, lastName: ln } = personalInformation;

console.log(`${fn} ${ln}`);

let sentence = `${"Hello"} 
${"World"}`;

document.getElementById("sentence").innerText = sentence;

const persInformation = {
  name: "Miruna",
  lastName: "Nedelcu",
  age: 17,
  hobby: "Reading"
};

const { name: nm, lastName: last } = persInformation;

console.log(`${nm} ${last}`);

let [firstWord, secondWord, thirdWord] = ["Miruna", "Elena", "Nedelcu"];

firstWord = "Fiona";
console.log(`${firstWord} ${secondWord} ${thirdWord}`);

function addressMaker(city, state) {
  const newAddress = { city, state };
  console.log(newAddress);
}

addressMaker("Austin", "Texas");

function myAddressMaker(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: "United States"
  };
  console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}

myAddressMaker({ city: "Austin", state: "Texas" });

function values(value) {
  const { hobby, sister } = value;

  const newValues = {
    name: "Lalaland",
    hobby,
    sister
  };
  console.log(`${newValues.hobby} ${newValues.sister} ${newValues.name}`);
}
values({ hobby: "Reading", sister: "Ana" });

var numbers = [1, 2, 3, 4, 4];
var [x, y] = numbers;
console.log(x, y);

var foo = [1, 2, 3];
var [one, two, three] = foo;
console.log(one, two, three);

var a, b;

[a = 5, b = 7] = [1, 2];
console.log(a); // 1
console.log(b); // 7

var z, c;

[z = 2, c = 3] = [1, 2];
console.log(z);
console.log(c);

var o = { foo: 43, tree: "pine" };
var { foo: num, tree: thatTree } = o;

console.log(num);
console.log(thatTree);

let incomes = [1234, 12344566, 456678];
let sum = 0;

for (const income of incomes) {
  sum += income;
  console.log(income);
}
console.log(sum);

let fullName = "Elena Miruna Nedelcu";

for (let char of fullName) {
  console.log(char);
}
/*
let fullNameOfDylan = "Dylan Coding God Israel";
for (const char of fullNameOfDylan) {
  console.log(char);
}
//it won´t run
let myObject = {
  for: 1,
  to: 5
};
for (let char of myObject) {
  console.log(char);
}
*/
let example4 = [1, 2, 3, 4, 5];

let example5 = [1, ...example4];

console.log(example5);

let example6 = {
  firstName: "Dylan"
};

let example7 = {
  ...example6
};
console.log(example7);

function add(...nums) {
  let total = nums.reduce((x, y) => x + y);

  console.log(total);
}

add(4, 5, 7, 8, 12);

function substracts(...integers) {
  let total = integers.reduce((x, z) => x - z);
  console.log(total);
}
substracts(9, 8, 7, 6, 5, 4, 3, 2);

function adds(newArray = []) {
  let total = 0;
  newArray.forEach(element => {
    total += element;
  });
  console.log(total);
}
adds();

let nums = [1, 2, 3.4, 5];

console.log(nums.includes(4));

const example8 = {};
example8.firstNameOf = "Miruna";
console.log(example8);

const numbs = [0];
numbs.push(2);
console.log(numbs);

export const data = [1, 2, 3];

let example9 = "Miruna";

console.log(example9.padStart(12, "Elena"));

let example10 = "Miruna";

console.log(example10.padEnd(23, "Elena"));

class Animal {
  constructor(type, legs, name) {
    this.type = type;
    this.legs = legs;
    this.name = name;
  }
  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }
}
let cat = new Animal("cat", 4, "Susy");
cat.legs = 3;
cat.makeNoise();
console.log(cat.type, cat.legs, cat.name);
