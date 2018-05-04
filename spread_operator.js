/*
  spread operator (전개 연산자)
  2개 이상의 인수 arguments(함수 호출)나 2개 이상의 요소 elements(배열 리터럴)
  또는 2개 이상의 변수(비구조화 할당)가 예상되는 곳에 확장될 수 있도록 함
*/

/* 구문 */

// 함수 호출
myFunction(...iterableObj);

// 배열 리터럴
[...iterableObj, 4, 5, 6];

// 비구조화 할당
[a, b, ...iterableObj] = [1, 2, 3, 4, 5];

/* 더 나은 apply */

// 배열을 함수의 인수로 사용하고 싶은 경우 Function.prototype.apply를 사용하는 것이 일반적
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);

//ES2015 전개 연산자 이용
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);

// 인수 목록의 어떤 인수라도 전개 연산자 구문을 쓸 수 있고 여러 번 사용 가능
function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

/* 더 강력한 배열 리터럴 */

// 인수 목록의 전개 연산자처럼 ...는 배열 리터럴 내 어디서든 여러 번 사용 가능
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]

/* new에 적용 */
var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);

/* 배열 복사 */
var arr = [1, 2, 3];
var arr2 = [...arr]; // arr.slice()와 유사하게 복사
arr2.push(4); // [1, 2, 3, 4]
// arr은 어떠한 영향도 받지 않음

/* 더 나은 push */

//ES5
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// arr1에 arr2의 모든 항목을 덧붙임
Array.prototype.push.apply(arr1, arr2);

//ES2015
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);

/* 나머지 구문 (파라미터) */
/*
  나머지 구문 (rest syntax)는 전개 연산자와 비슷함
  그러나, 나머지 구문은 배열이나 객체를 비구조화 할당(destructuring assignment)을 할 때, 사용
  전개 연산자는 배열이나 객체를 확장하지만, 반면에 나머지 구문은 2개 이상의 요소을 하나의 요소로 모음
*/

// 참고 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator
