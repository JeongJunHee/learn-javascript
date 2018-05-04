<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## JavaScript 기본 문법

### 목차

**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [언어소개](#%EC%96%B8%EC%96%B4%EC%86%8C%EA%B0%9C)
  - [JavaScript](#javascript)
  - [역사](#%EC%97%AD%EC%82%AC)
  - [ECMAScript](#ecmascript)
  - [참고](#%EC%B0%B8%EA%B3%A0)
- [숫자와 문자](#%EC%88%AB%EC%9E%90%EC%99%80-%EB%AC%B8%EC%9E%90)
  - [숫자](#%EC%88%AB%EC%9E%90)
  - [문자](#%EB%AC%B8%EC%9E%90)
  - [문자연산](#%EB%AC%B8%EC%9E%90%EC%97%B0%EC%82%B0)
- [변수](#%EB%B3%80%EC%88%98)
  - [변수의 선언](#%EB%B3%80%EC%88%98%EC%9D%98-%EC%84%A0%EC%96%B8)
  - [주석](#%EC%A3%BC%EC%84%9D)
- [비교](#%EB%B9%84%EA%B5%90)
  - [연산자](#%EC%97%B0%EC%82%B0%EC%9E%90)
  - [비교 연산자](#%EB%B9%84%EA%B5%90-%EC%97%B0%EC%82%B0%EC%9E%90)
  - [참고](#%EC%B0%B8%EA%B3%A0-1)
- [조건문](#%EC%A1%B0%EA%B1%B4%EB%AC%B8)
  - [문법](#%EB%AC%B8%EB%B2%95)
  - [변수와 비교연산자](#%EB%B3%80%EC%88%98%EC%99%80-%EB%B9%84%EA%B5%90%EC%97%B0%EC%82%B0%EC%9E%90)
  - [조건문의 중첩](#%EC%A1%B0%EA%B1%B4%EB%AC%B8%EC%9D%98-%EC%A4%91%EC%B2%A9)
  - [논리 연산자](#%EB%85%BC%EB%A6%AC-%EC%97%B0%EC%82%B0%EC%9E%90)
  - [boolean의 대체제](#boolean%EC%9D%98-%EB%8C%80%EC%B2%B4%EC%A0%9C)
- [반복문](#%EB%B0%98%EB%B3%B5%EB%AC%B8)
  - [문법](#%EB%AC%B8%EB%B2%95-1)
  - [반복문 제어](#%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%A0%9C%EC%96%B4)
- [함수](#%ED%95%A8%EC%88%98)
  - [함수의 형식](#%ED%95%A8%EC%88%98%EC%9D%98-%ED%98%95%EC%8B%9D)
  - [함수의 정의와 호출](#%ED%95%A8%EC%88%98%EC%9D%98-%EC%A0%95%EC%9D%98%EC%99%80-%ED%98%B8%EC%B6%9C)
- [배열](#%EB%B0%B0%EC%97%B4)
  - [배열의 생성](#%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%83%9D%EC%84%B1)
  - [배열의 사용](#%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%82%AC%EC%9A%A9)
  - [배열의 크기](#%EB%B0%B0%EC%97%B4%EC%9D%98-%ED%81%AC%EA%B8%B0)
  - [배열의 조작](#%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%A1%B0%EC%9E%91)
- [객체 (object)](#%EA%B0%9D%EC%B2%B4-object)
  - [객체의 생성](#%EA%B0%9D%EC%B2%B4%EC%9D%98-%EC%83%9D%EC%84%B1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 언어소개

### JavaScript

* JavaScript는 웹페이지를 동적으로, 프로그래밍적으로 제어하기 위해서 고안된 언어

* 웹브라우저에서 유일하게 사용할 수 있는 프로그래밍 언어

### 역사

* HTML이 한번 화면에 출력된 후 그 형태나 동작방법을 바꿀 수 없는 문제를 해결하기 위해 네스케이프에서 개발

### ECMAScript

* ECMAScript는 표준화 기구인 Ecma International에 의해서 관리되는 자바스크립트 표준안

### 참고

https://opentutorials.org/course/743/4650

## 숫자와 문자

### 숫자

자바스크립트에서는 " ", ' '가 붙지 않은 숫자는 숫자로 인식한다.

```javascript
console.log(1 + 1);       // 2
console.log(1.2 + 1.3);   // 2.5
console.log(2 * 5);       // 10
console.log(6 / 2);       // 3
```

```javascript
Math.pow(3,2);      // 9,  3의 2승
Math.round(10.6);   // 11, 10.6을 반올림
Math.ceil(10.2);    // 11, 10.2를 올림
Math.floor(10.6);   // 10, 10.6을 내림
Math.sqrt(9);       // 3,  3의 제곱근
Math.random();      // 0부터 1.0 사이의 랜덤한 숫자
```

### 문자

문자는 " ", ' ' 중의 하나로 감싸야 한다.

```javascript
console.log("coding everybody");
console.log('coding everybody');
```

숫자를 따옴표로 감싸면 문자가 된다.
typeof : 값의 데이터 형을 알려줌

```javascript
console.log(typeof "1");  // string
console.log(typeof 1);    // number
```

### 문자연산

문자 + 문자

```javascript
console.log("coding" +" everybody");     // coding everybody
```

문자의 길이를 구할 때는 문자 뒤에 .length를 붙인다.

```javascript
console.log("coding everybody".length);  // 16
```

## 변수

* 변수(Variable)는 (문자나 숫자 같은) 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다.

* 여기에 담겨진 값은 다른 값으로 바꿀 수 있다.

### 변수의 선언

* 변수는 var로 시작한다. var는 변수를 선언하겠다는 것을 의미한다.

* var을 생략 할수도 있지만 이것은 유효범위라는 것에 영향을 미친다.

* var의 의미를 명확하게 이해하기 전까지는 var를 사용하는 것을 권장한다.

* 변수의 이름은 $, `_, 혹은 특수 문자를 제외한 모든 문자로 시작할 수 있다`

```javascript
var a = 1;
console.log(a + 1);  // 2

var a = 2;
console.log(a + 1);  // 3
```

### 주석

```javascript
// 한줄

/*
   여러줄
*/
```

* 세미콜론(;)은 하나의 구문이 끝났음을 명시적으로 나타내는 기호

* 다음처럼 한줄에 여러구문을 사용하고 싶을 때 세미콜론이 유용

```javascript
a = 1; console.log(a + 1);
```

JavaScript에서는 세미콜론을 생략할 수 있는데, 이 경우 줄바꿈을 명령의 끝으로 간주

## 비교

### 연산자

* 연산자란 값에 대해서 어떤 작업을 컴퓨터에게 지시하기 위한 기호

* '='는 우항의 값인 1을 좌항의 변수 a에 대입하는 '대입 연산자'

```javascript
a = 1
```

### 비교 연산자

* 비교란 주어진 값들이 같은지, 다른지, 큰지, 작은지를 구분하는 것을 의미

* 이 때 비교 연산자를 사용하는데 비교 연산자의 결과는 true나 false 중의 하나

#### ==

* 동등 연산자로 서로 값이 같으면 true 다르면 false

```javascript
console.log(1 == 2)             //false
console.log(1 == 1)             //true
console.log("one" == "two")     //false
console.log("one" == "one")     //true
```

#### ===

* 일치 연산자로 서로 값이 '정확'하게 같으면 true 다르면 false

* === 는 서로 같은 수를 표현하고 있더라도 데이터 형이 같은 경우에만 같다고 판단

```javascript
console.log(1 == '1');              //true
console.log(1 === '1');             //false

console.log(null == undefined);       //true
console.log(null === undefined);      //false
console.log(true == 1);               //true
console.log(true === 1);              //false
console.log(true == '1');             //true
console.log(true === '1');            //false

console.log(0 === -0);                //true
console.log(NaN === NaN);             //false
```

* null과 undefined는 값이 없다는 의미의 데이터 형

* null은 값이 없음을 명시적으로 표시한 것이고, undefined는 그냥 값이 없는 상태

* NaN은 0/0과 같은 연산의 결과로 만들어지는 특수한 데이터 형인데 숫자가 아니라는 뜻

#### !=

```javascript
console.log(1 != 2);            //true
console.log(1 != 1);            //false
console.log("one" != "two");    //true
console.log("one" != "one");    //false
```

#### !==

#### >

```javascript
console.log(10 > 20);   //false
console.log(10 > 1);    //true
console.log(10 > 10);   //false
```

#### >=

```javascript
console.log(10 >= 20);      //false
console.log(10 >= 1);       //true
console.log(10 >= 10);      //true
```

### 참고
https://dorey.github.io/JavaScript-Equality-Table/ (==과 ===의 차이점)


## 조건문

### 문법

#### if

```javascript
if(false) {
    console.log(1);
} else if(true) {
    console.log(2);
} else if(true) {
    console.log(3);
} else {
    console.log(4);
}
```

### 변수와 비교연산자

```javascript
id = prompt('아이디를 입력해주세요.')
if(id=='아이디') {
    console.log('아이디가 일치 합니다.')
} else {
    console.log('아이디가 일치하지 않습니다.')
}
```

### 조건문의 중첩

```javascript
id = prompt('아이디를 입력해주세요.');
if(id=='아이디') {
    password = prompt('비밀번호를 입력해주세요.');
    if(password==='비밀번호') {
        console.log('인증 했습니다.');
    } else {
        console.log('인증에 실패 했습니다.');
    }
} else {
    console.log('인증에 실패 했습니다.');
}
```

### 논리 연산자

#### &&

좌항과 우항이 모두 참(true)일 때 참

#### ||

좌우항 중에 하나라도 참(true)일 때 참

#### !

Boolean의 값을 역전시킨다. true를 false로 false를 true

### boolean의 대체제

#### 01

0은 false 0이 아닌 값은 true로 간주

#### 기타 false로 간주되는 데이터 형

```javascript
if(!'') {
    console.log('빈 문자열')
}
if(!undefined) {
    console.log('undefined');
}

var a;

if(!a) {
    console.log('값이 할당되지 않은 변수');
}
if(!null) {
    console.log('null');
}
if(!NaN) {
    console.log('NaN');
}
```

## 반복문

### 문법

#### while

```javascript
while (조건) {
    반복해서 실행할 코드
}
```

#### for

```javascript
for( 초기화 ; 반복조건 ; 반복이 될 때마다 실행되는 코드){
    반복해서 실행될 코드
}
```

### 반복문 제어

#### break

#### continue

## 함수

### 함수의 형식

```javascript
function 함수명 ( [인자 ... [, 인자]] ) {
  코드
  return 반환값
}
```

### 함수의 정의와 호출

```javascript
function numbering() {
    i = 0;
    while(i < 10){
        console.log(i);
        i += 1;
    }   
}

var numbering = function () {
    i = 0;
    while(i < 10){
        console.log(i);
        i += 1;
    }   
}

numbering();
```

## 배열

### 배열의 생성

```javascript
var member = ['index1', 'index2', 'index3'];
console.log(member[0], member[1], member[2]);
// index1 index2 index3

for(var item in member) {
  console.log(member[item]);
}
/*
  index1
  index2
  index3
*/
```

### 배열의 사용

```javascript
function memberList() {
  return ['index1', 'index2', 'index3'];
}

members = memberList();

for(i = 0 ; i < members.length ; i++ ) {
  console.log(members[i].toUpperCase());
}

/*
  INDEX1
  INDEX2
  INDEX3
*/

```

### 배열의 크기

```javascript
var arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5
```

### 배열의 조작

#### 추가

```javascript
var li = ['a', 'b', 'c', 'd', 'e'];

// 배열의 끝에 원소를 추가 (push)
li.push('f');
console.log(li);       // (6) ["a", "b", "c", "d", "e", "f"]

// 복수의 원소를 배열에 추가 (concat)
li = li.concat(['g', 'h']);
console.log(li);       // (8) ["a", "b", "c", "d", "e", "f", "g", "h"]

// 배열의 시작점에 원소를 추가 (unshift)
li.unshift('z');
console.log(li);       // (9) ["z", "a", "b", "c", "d", "e", "f", "g", "h"]

// 원하는 인덱스 위치에 원소를 추가
li.splice(2, 0, 'i');
console.log(li);       // (10) ["z", "a", "i", "b", "c", "d", "e", "f", "g", "h"]

li.splice(3, 3);
console.log(li);       // (7) ["z", "a", "i", "e", "f", "g", "h"]
```

splice는 첫번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 원소의 숫자만큼의 값을 배열로부터 제거한 후에 리턴

#### 제거

```javascript
var li = ['a', 'b', 'c', 'd', 'e'];

// 첫번째 원소를 제거 (shift)
li.shift();
console.log(li);       // (4) ["b", "c", "d", "e"]

// 마지막 원소를 제거 (pop)
li.pop();
console.log(li);       // (3) ["b", "c", "d"]
```

#### 정렬

```javascript
// 정렬
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort();
console.log(li)        // (5) ["a", "b", "c", "d", "e"]

// 역순 정렬
var li = ['c', 'e', 'a', 'b', 'd'];
li.reverse();
console.log(li)        // (5) ["d", "b", "a", "e", "c"]
```

## 객체 (object)

### 객체의 생성

```javascript
var grades = { korean : 80, english : 75, math : 90 };

var grades = {};
grades['korean'] = 80;
grades['english'] = 75;
grades['math'] = 90;

var grades = new Object();
grades['korean'] = 80;
grades['english'] = 75;
grades['math'] = 90;

console.log(grades['korean']);   // 80
console.log(grades['english']);  // 75
console.log(grades['math']);     // 90
```

```javascript
var grades = { korean : 80, english : 75, math : 90 };

for(key in grades) {
  console.log("key : " + key + ", value : " + grades[key]);
}

/*
  key : korean, value : 80
  key : english, value : 75
  key : math, value : 90
*/
```

```javascript
var grades = {
    'list': {'korean': 80, 'english': 75, 'math': 90},
    'show' : function() {
        for(var score in this.list){
            console.log(score + ':'+ this.list[score]);
        }
    }
};

grades.show();

/*
  korean:80
  english:75
  math:90
*/
```
