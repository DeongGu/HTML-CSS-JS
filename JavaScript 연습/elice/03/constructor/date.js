const now = new Date();

let user = {
  name: "길동",
  address: "부산",
};

// let park = {
//   name: "박",
//   address: "서울",
// };

let sum = {
  a: 1,
  b: 2,
};

function Address(name, address) {
  this.name = name;
  this.address = address;
}

let park = new Address("박", "서울");
let lee = new Address("이", "부산");

console.log(park);
console.log(lee);

function calculator(a, b) {
  //   let a = 1;
  //   let b = 2;
  return a + b;
}

function Cal() {
  this.a = 1;
  this.b = 2;
  this.sum = function () {
    return this.a + this.b;
  };
}

const c = new Cal();

console.log(c.sum());

calculator(1, 2); //3
calculator(2, 2); //4
calculator(3, 2); // 5

console.log(now);
console.log(typeof now);

console.log("Year: " + now.getFullYear());
console.log("Month: " + now.getMonth());

console.log(now.toLocaleString());
