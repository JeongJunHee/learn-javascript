// Array.concat
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var array = arr1.concat(arr2, arr3);
console.log(array); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Array.sort
var numbers = [4, 7, 2, 3, 1, 8, 10, 9, 6, 5];

numbers.sort(function(a, b) {
    return  a - b;  // b - a
});

console.log(numbers);   // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array.indexOf
// .indexOf() 인자로 전달된 문자열과 매치되는 첫 번째 원소의 인덱스를 반환, 원소가 존재하지 않으면 -1 반환
var array = ['aaa', 'bbb', 'ccc'];

console.log(array.indexOf('aaa'));  // 0
console.log(array.indexOf('ccc'));  // 2
console.log(array.indexOf('ddd'));  // -1

// Array.forEach

// 원본 배열
var testArray = ["aaa", "bbb", "ccc", "ddd"];

// 배열의 모든 요소에 EDIT라는 문자열 더하기
// 메서드 수행 후 리턴값은 undefined
testArray.forEach(function (item, index, array) {
    array[index] = item + "EDIT";
});

// 메서드 수행 후 원본 배열
console.log(testArray); // (4) ["aaaEDIT", "bbbEDIT", "cccEDIT", "dddEDIT"]


// Array.map

// 원본 배열
var testArray = ["aaa", "bbb", "ccc", "ddd"];

// 배열의 모든 요소에 NEW라는 문자열 더하기
// 메서드 수행 후 리턴값은 새로운 배열
var newArray = testArray.map(function (item, index, array) {
    return item + "NEW";
});

// 메서드 수행 후 생성된 배열
console.log(newArray); // (4) ["aaaNEW", "bbbNEW", "cccNEW", "dddNEW"]

// Array.some

// 원본 배열
var testArray = ["aaa", "bbb", "ccc", "ddd"];

// 배열 중에서 "bbb"가 있으면 true를 리턴
// 메서드 수행 중 true가 리턴되면 메서드 수행을 중단하고 true를 리턴
testArray.some(function (item, index, array) {
    console.log(index + "번째 요소 : " + item);
    return !!~item.search("bbb");
});
// 0번째 요소 : aaa
// 1번째 요소 : bbb
// true

// Array.every

// 원본 배열
var testArray = ["aaa", "bbb", "ccc", "ddd"];

// 배열의 모든 요소에 "aaa"가 있으면 true를 리턴
// 메서드 수행 중 false가 리턴되면 메서드 수행을 중단하고 false를 리턴
testArray.every(function (item, index, array) {
    console.log(index + "번째 요소 : " + item);
    return !!~item.search("aaa");
})

// 0번째 요소 : aaa
// 1번째 요소 : bbb
// false

// 원본 배열
var testArray = ["aaa", "bbb", "ccc", "ddd"];

// 배열의 모든 요소가 알파벳 소문자로 이루어져 있으면 true를 리턴
// 메서드 수행 중 false가 리턴되면 메서드 수행을 중단하고 false를 리턴
testArray.every(function (item, index, array) {
    console.log(index + "번째 요소 : " + item);
    return !!~item.search(/[a-z]+/); // 정규표현식
});

// 0번째 요소 : aaa
// 1번째 요소 : bbb
// 2번째 요소 : ccc
// 3번째 요소 : ddd
// true

// Array.filter

// 원본 배열
var testArray = ["aaa", "bbb", "ccc", "ddd"];

// 배열의 요소가 a 또는 b로 이루어져 있으면 추출
// 메서드가 종료되면 추출된 요소로만 이루어진 새로운 배열을 리턴
var newArray = testArray.filter(function (item, index, array) {
    return !!~item.search(/[ab]+/)
});

// 메서드 수행 후 원본 배열
console.log(testArray); // (4) ["aaa", "bbb", "ccc", "ddd"]

// 메서드 수행 후 생성된 배열
console.log(newArray);  // (2) ["aaa", "bbb"]

// Array.reduce

// 원본 배열
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 각 콜백마다의 리턴값을 previousItem으로 넘겨받아 어떤 작업을 수행
// 메서드가 종료되면 마지막 콜백의 리턴값을 리턴
var result = testArray.reduce(function (previousItem, currentItem, index, array) {
    // 반환된 결과는 다음번 콜백의 첫번째 파라미터로 다시 전달 됨
    return previousItem + currentItem;
}, 0);

// 메서드 수행 후 원본 배열
console.log(testArray); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 메서드 수행 후 리턴값은 0부터 10까지의 합
console.log(result);    // 55



















