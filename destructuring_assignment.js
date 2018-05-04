// destructuring assignment (비구조화 할당)
// 배열의 값이나 객체의 속성을 별개의 변수로 추출할 수 있게 하는 자바스크립트 식 (expression)
var a, b, rest;

[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); //{c: 30, d: 40}

/* 배열 비구조화 */

// 기본 변수 할당
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

// 선언에서 분리한 할당
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// 기본값
// 배열 인자의 값이 undefined인 경우에 기본값 할당
var a, b;

[a = 5, b = 7] = [1];
console.log(a) // 1
console.log(b) // 7

// 변수 교환
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// 함수에서 반환된 배열 파싱
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a) // 1
console.log(b) // 2

// 일부 반환값 무시
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

// 모든 반환값 무시``
[ , , ] = f();

// 변수에 배열의 나머지를 할당
// 비구조화 할당시, rest 패턴을 이용해 배열의 남은 부분을 변수 하나에 할당 할 수 있음
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

// rest element 다음에 trailing comma를 사용하면 SyntaxError가 발생
var [a, ...b,] = [1, 2, 3]; // Uncaught SyntaxError: Rest element must be last element

/* 객체 비구조화 */

// 기본 할당
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

// 선언 없는 할당
var a, b;

({a, b} = {a: 1, b: 2});

/*
  할당 문을 둘러싼 ( .. )는 선언 없이 객체 리터럴 비구조화 할당을 사용할 때 필요한 구문

  {a, b} = {a : 1, b : 2}는 유효한 독립 구문이 아님, 좌변의 {a, b}가 블록으로 간주되고 객체 리터럴이 아니기 때문

  그러나 ({a, b} = {a : 1, b : 2})는 유효한데, var {a, b} = {a : 1, b : 2}의 형태와 같다

  참고: ( .. ) 표현식 앞에 세미콜론이 없다면 이전 줄에 있는 함수 실행을 위해 이용될 수 있다
*/

// 새로운 변수 이름으로 할당
// 변수를 추출해서 원래 객체 속성명과는 다른 이름으로 할당 가능
var o = {p : 42, q : true};
var {p : foo, q : bar} = o;

console.log(foo); // 42
console.log(bar); // true

// 기본값
// 객체에서 가져온 값이 undefined인 경우에 기본값 할당
var {a = 10, b = 5} = {a : 3};

console.log(a); // 3
console.log(b); // 5

// 기본값을 제공하여 새로운 변수 이름으로 할당
// 새로운 변수명 할당과 기본값 할당을 한번에 할 수 있음
var {a : aa = 10, b : bb = 5} = {a : 3};

console.log(aa); // 3
console.log(bb); // 5

// 함수 매개변수의 기본값 설정
// ES5 버전
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});

// ES2015 버전
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
  console.log(size, cords, radius);
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});

/*
  drawES2015Chart를 보면, 비구조화된 좌변에 빈 오브젝트 리터럴을 할당하는 것을 볼 수 있음
  {size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}.

  빈 오브젝트를 우변에 할당하지 않고도 함수를 작성할 수 있음

  그러나 지금의 형태에서는 drawES2015Chart()처럼 어떤 매개변수 없이도 실행할 수 있지만,
  빈 오브젝트 할당을 없앤다면 함수 실행시 적어도 하나의 인자가 제공되어야 함

  만약 함수가 어떠한 매개변수 없이도 작동하길 원한다면 지금 형태가 유용하고,
  무조건 객체를 넘기길 원하는 경우에는 빈 객체 할당을 하지 않는 것이 유용할 수 있음
*/

// 중첩 객체 및 배열 비구조화
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

// for of 반복문과 비구조화
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name : n, family : { father : f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}
// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

// 함수 매개변수로 전달된 객체에서 필드 가져오기
// user객체에서 id, displayName 및 firstName 을 가져와 출력
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"

// 계산된 속성 이름과 비구조화
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"

// 객체 비구조화시 나머지 (rest)
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }

// 속성 이름이 유효한 자바스크립트 식별자명이 아닌 경우
// 대체할 유효한 식별자명을 제공해야 함
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"

// 참고 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
