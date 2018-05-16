const Immutable = require('immutable');

var Map = Immutable.Map;

// Map : 객체 대신 사용되는 데이터 구조
var data = Map({
  a: 1,
  b: 2,
  c: Map({
    d: 3,
    e: 4,
    f: 5
  })
});

console.log(data);

// 자바스크립트 객체로 변환 toJS(), Map을 일반 자바스크립트 객체 형태로 변환
console.log(data.toJS());

// 특정 키 값 불러오기
console.log(data.get('a'));

// 깊숙한 값 불러오기
console.log(data.getIn(['c', 'd']));

// 값 설정하기
data = data.set('a', 4);
console.log(data);

// 깊숙한 값 설정하기
data = data.setIn(['c', 'd'], 5);
console.log(data);

// 여러개의 값 설정하기
data = data.mergeIn(['c'], { d: 10, e: 10 });
console.log(data);

data = data.setIn(['c', 'd'], 9)
  .setIn(['c', 'e'], 9);
console.log(data);

data = data.merge({ a: 10, b: 10 })
console.log(data);

// 전체 객체를 업데이트 하는 경우
data = data.set('c', Map({ d: 15, e: 15, f: 15 }));
console.log(data);


// List : 배열 대신 사용되는 데이터 구조
var List = Immutable.List;

var list = List([
  Map({ value: 1 }),
  Map({ value: 2 })
]);
console.log(list);

// 자바스크립트 배열로 변환 toJS()
console.log(list.toJS());

// 값 읽어오기
console.log(list.get(0));
console.log(list.getIn([0, 'value']));

// 아이템 수정하기
list = list.setIn([0, 'value'], 10);
console.log(list);

list = list.update(
  1,  // index
  item => item.set('value', item.get('value') * 5)
)
console.log(list);

list = list.set(0, Map({ value: 15 }));
console.log(list);

// 아이템 추가하기
list = list.push(Map({value : 3}));
console.log(list);

list = list.unshift(Map({value : 0}));
console.log(list);

// 아이템 제거하기
list = list.delete(1);
console.log(list);

list = list.pop();
console.log(list);

// 크기 가져오기
console.log(list.size);

// 비어있는지 확인
console.log(list.isEmpty());