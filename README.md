[TOC]

## JavaScript

* JavaScript는 웹페이지를 동적으로, 프로그래밍적으로 제어하기 위해서 고안된 언어
* 웹브라우저에서 유일하게 사용할 수 있는 프로그래밍 언어

## 역사

* HTML이 한번 화면에 출력된 후 그 형태나 동작방법을 바꿀 수 없는 문제를 해결하기 위해 네스케이프에서

## ECMAScript

* ECMAScript는 표준화 기구인 Ecma International에 의해서 관리되는 자바스크립트 표준안

## 참고

https://opentutorials.org/course/743/4650

## 숫자

자바스크립트에서는 " ", ' '가 붙지 않은 숫자는 숫자로 인식

<pre><code>alert(1 + 1);       // 2
alert(1.2 + 1.3);   // 2.5
alert(2 * 5);       // 10
alert(6 / 2);       // 3
</code></pre>

<pre><code>Math.pow(3,2);      // 9,  3의 2승
Math.round(10.6);   // 11, 10.6을 반올림
Math.ceil(10.2);    // 11, 10.2를 올림
Math.floor(10.6);   // 10, 10.6을 내림
Math.sqrt(9);       // 3,  3의 제곱근
Math.random();      // 0부터 1.0 사이의 랜덤한 숫자
</code></pre>

## 문자

문자는 " ", ' ' 중의 하나로 감싸야 한다.

    alert("coding everybody");
    alert('coding everybody');

숫자를 따옴표로 감싸면 문자가 된다.<br/>
(typeof : 값의 데이터 형을 알려줌)

    alert(typeof "1");  // string
    alert(typeof 1);    // number

문자열 안에 작은 따옴표나 큰따옴표를 넣고 싶을 때는 \ 를 사용한다.

    alert('egoing\'s javascript');

여러줄을 표시하기 위해서는 \n 사용

    alert("안녕하세요.\n생활코딩의 세계에 오신 것을 환영합니다");

## 문자연산

문자 + 문자

    alert("coding"+" everybody");

문자의 길이를 구할 때는 문자 뒤에 .length를 붙인다.

    alert("coding everybody".length)
