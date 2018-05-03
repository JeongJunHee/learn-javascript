<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
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
alert(1 + 1);       // 2
alert(1.2 + 1.3);   // 2.5
alert(2 * 5);       // 10
alert(6 / 2);       // 3
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
alert("coding everybody");
alert('coding everybody');
```

숫자를 따옴표로 감싸면 문자가 된다.
typeof : 값의 데이터 형을 알려줌

```javascript
alert(typeof "1");  // string
alert(typeof 1);    // number
```

문자열 안에 작은 따옴표나 큰따옴표를 넣고 싶을 때는 \ 를 사용한다.

```javascript
alert('egoing\'s javascript');    // egoing's javascript
```

여러줄을 표시하기 위해서는 \n 을 사용한다.

```javascript
alert("안녕하세요.\n생활코딩의 세계에 오신 것을 환영합니다");   // 안녕하세요.
                                                            // 생활코딩의 세계에 오신 것을 환영합니다
```

### 문자연산

문자 + 문자

```javascript
alert("coding" +" everybody");     // coding everybody
```

문자의 길이를 구할 때는 문자 뒤에 .length를 붙인다.

```javascript
alert("coding everybody".length);  // 16 
```

## 변수

* 변수(Variable)는 (문자나 숫자 같은) 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다.

* 여기에 담겨진 값은 다른 값으로 바꿀 수 있다.

### 변수의 선언

* 변수는 var로 시작한다. var는 변수를 선언하겠다는 것을 의미한다.

* var을 생략 할수도 있지만 이것은 유효범위라는 것에 영향을 미친다.

* var의 의미를 명확하게 이해하기 전까지는 var를 사용하는 것을 권장한다.

* 변수의 이름은 $, _, 혹은 특수 문자를 제외한 모든 문자로 시작할 수 있다

```javascript
var a = 1;
alert(a + 1);  // 2

var a = 2;
alert(a + 1);  // 3
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
a = 1; alert(a+1);
```

JavaScript에서는 세미콜론을 생략할 수 있는데, 이 경우 줄바꿈을 명령의 끝으로 간주


