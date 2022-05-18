const obj = {
  x: 1,
  //foo는 메서드다.
  foo() {
    return this.x;
  },
  //bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo());
console.log(obj.bar());

// new obj.foo(); // TypeError: obj.foo is not a constructor
new obj.bar();

//obj.foo는 constructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다.
obj.foo.hasOwnProperty("prototype"); // false

//obj.bar는 constructor인 일반 함수이므로 prototype 프로퍼티가 있다.
obj.bar.hasOwnProperty("prototype"); // true



const base = {
  name: "Lee",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  //sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]
  //sayHi의 [[HomeObject]]는 derived.prototype을 가리키고
  //super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다.
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  },
};

console.log(derived.sayHi()); // Hi! Lee. how are you doing?

const derived = {
  __proto__: base,
  //sayHi는 ES6 메서드가 아니다.
  //따라서 sayHi는 [[HomeObject]]를 갖지 않으므로 super 키워드를 사용할 수 없다.
  sayHi: function () {
    //SyntaxError: 'super' keyword unexpected here
    return `${super.sayHi()}. how are you doing?`;
  },
};

const multiply = (x, y) => x * y;
multiply(2, 3); // 6

const oneVariable = (x) => {};
const noVariable = () => {};

//concise body
const power = (x) => x ** 2;
power(2); //4
//block body
const power = (x) => {
  return x ** 2;
};

const arrow = ()=> const x = 1; // SyntaxError: Unexpected token 'const'

const arrow = ()=> {return const x = 1; };

const arrow = () => {const x = 1;};


const create = (id, content) => ({id, content});
create(1, 'JavaScript'); // {id: 1, content: "JavaScript"}

const create = (id, content) => { return {id, content};};

const create = (id, content) => {id, content};
create(1, 'JavaScript'); //undefined

const sum = (a,b) => {
    const result = a + b;
    return result;
};

const person = (name => ({
    sayHi() { return `Hi? My name is ${name}.`;}
}))('Lee');

console.log(person.sayHi()); //Hi? My name is Lee.


//ES5
[1,2,3].map(function(v){
    return v*2;
});

//ES6
[1,2,3].map(v => v * 2); // [ 2, 4, 6 ]


const Foo = () => {};
//화살표 함수는 생성자 함수로서 호출할 수 없다.
new Foo(); // TypeError: Foo is not a constructor

const Foo = () => {};
//화살표 함수는 prototype 프로퍼티가 없다.
Foo.hasOwnProperty('prototype'); // false


function normal(a,a) { return a + a}
console.log(normal(1,2)); //4

'use strict';

function normal(a, a) {return a + a; }
//SyntaxError: Duplicate parameter name not allowed in this context

const arrow = (a, a) => a + a;
//SyntaxError: Duplicate parameter name not allowed in this context
