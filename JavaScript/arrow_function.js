// 화살표 함수 (arrow fuction)
// function 키워드 대신 화살표 (=>)를 사용하여 간략한 방법으로 함수를 선언할 때 사용

// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한개인 경우, () 생략 가능
(x, y) => { ... } // 매개변수가 여러개인 경우, () 생략 불가능

// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략 가능하며, 암묵적으로 return 됨 위 표현과 동일.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일. 객체 반환 시 ()를 사용

() => {           // multi line block.
  const x = 10;
  return x * x;
};

// 화살표 함수의 호출
// 화살표 함수는 익명 함수로만 사용 가능, 화살표 함수를 호출하기 위해서는 함수 표현식을 사용
// ES5
var pow = function (x) { return x * x; };
console.log(pow(10)); // 100

// ES6
var pow = x => x * x;
console.log(pow(10)); // 100

// 또는 콜백 함수로 사용, 이 경우 일반적인 함수 표현식보다 표현이 간결
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function(x) {
  return x * x;
})

console.log(pow); // [1. 4. 9]

// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [1, 4, 9]

// 화살표 함수 도입에 영향을 준 두 요소 : 짧은 함수 및 바인딩되지 않은 this
// 짧은 함수
var fruit = ['apple', 'banana', 'orange', 'grape'];

fruit.map(function(fruit) {
  return fruit.length;
}); // (4) [5, 6, 6, 5]

fruit.map((fruit) => {
  return fruit.length;
}); // (4) [5, 6, 6, 5]

fruit.map(({length}) => length);  // (4) [5, 6, 6, 5]

// 바인딩 되지 않은 this
// 화살표 함수 전까지는, 모든 새로운 함수는 자신의 this를 정의
function Person() {
  // Person() 생성자는 'this'를 자신의 인스턴스로 정의.
  this.age = 0;
  console.log(this);  // Person {age: 0}
  setInterval(function growUp() {
    this.age++;
    console.log(this);  // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  }, 1000);
}

var p = new Person();

// 화살표 함수는 전역 컨텍스트에서 실행될 때 this를 새로 정의하지 않음
// 대신, 코드에서 바로 바깥의 함수(혹은 class)의 this값이 사용됨
// 따라서, 다음 코드에서 setInterval에 전달 된 함수의 this는 setInterval을 포함한 function의 this와 동일한 값을 가짐
function Person() {
  this.age = 0;
  console.log(this);  // Person {age: 0}
  setInterval(() => {
    this.age++; // this는 Person 객체를 참조
    console.log(this);  // Person {age: 1} ...... Person {age: n}
  }, 1000)
}

var p = new Person();


// 참고
// https://poiemaweb.com/es6-arrow-function
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
