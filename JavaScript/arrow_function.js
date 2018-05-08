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
// 화살표 함수는 익명 함수로만 사용 가능
// ES5
var pow = function (x) { return x * x; };
console.log(pow(10)); // 100

// ES6
var pow = x => x * x;
console.log(pow(10)); // 100
