## LifeCycle API

컴포넌트가 브라우저에서 나타날 때, 사라질 때, 그리고 업데이트 될 때, 호출되는 API

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [컴포넌트 초기 생성](#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%B4%88%EA%B8%B0-%EC%83%9D%EC%84%B1)
  - [constructor](#constructor)
  - [componentDidMount](#componentdidmount)
- [컴포넌트 업데이트](#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8)
  - [static getDerivedStateFromProps()](#static-getderivedstatefromprops)
  - [shouldComponentUpdate](#shouldcomponentupdate)
  - [getSnapshotBeforeUpdate()](#getsnapshotbeforeupdate)
  - [componentDidUpdate](#componentdidupdate)
- [컴포넌트 제거](#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%A0%9C%EA%B1%B0)
  - [componentWillUnmount](#componentwillunmount)
- [컴포넌트에 에러 발생](#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D)
  - [componentDidCatch](#componentdidcatch)
- [참고](#%EC%B0%B8%EA%B3%A0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 컴포넌트 초기 생성

컴포넌트가 브라우저에 나타나기 전, 후에 호출되는 API

#### constructor

컴포넌트 생성자 함수, 컴포넌트가 새로 만들어질 때마다 함수 호출

```javascript
constructor(props) {
  super(props)
}
```

#### componentDidMount

컴포넌트가 화면에 나타나게 됐을 때 호출

```javascript
componentDidMount() {
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
```
### 컴포넌트 업데이트

컴포넌트의 업데이트는 props의 변화, 그리고 state의 변화에 따라 결정

업데이트가 되기 전과 그리고 된 후의 API 호출

#### static getDerivedStateFromProps()

props로 받아온 값을 state로 동기화하는 작업을 해줘야 하는 경우에 사용

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
  // 여기서는 setState를 하는 것이 아니라
  // 특정 props가 바뀔 때, 설정하고 싶은 state값을 리턴하는 형태로 사용
  /*
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null; // null을 리턴하면 따로 업데이트 할 것이 없다 라는 의미
  */
}
```

#### shouldComponentUpdate

컴포넌트를 최적화하는 작업에서 매우 유용하게 사용

현재 컴포넌트의 상태가 업데이트 되지 않아도. 부모 컴포넌트가 리렌더링 되면, 자식 컴포넌트들도 렌더링(render()함수 호출) 됨

기본적으로 true를 리턴, 조건에 따라 false를 반환하여 해당 조건에서는 render()함수가 호출되지 않도록 함

```javascript
shouldComponentUpdate(nextProps, nextState) {
  // return false하면 업데이트를 안함
  // return this.props.checked !== nextProps.checked
  return true;
}
```

#### getSnapshotBeforeUpdate() 

API 가 발생하는 시점
1. render()
2. getSnapshotBeforeUpdate()
3. 실제 DOM에 변화 발생
4. componentDidUpdate

DOM변화가 일어나기 직전의 DOM상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate에서 3번째 파라미터로 받아올 수 있음

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지
    // scrollHeight는 전 후를 비교해서 스크롤 위치를 설정하기 위함
    // scrollTop은, 이 기능이 크롬에 이미 구현이 되어있는데, 
    // 이미 구현이 되어있다면 처리하지 않도록 하기 위함
    if (prevState.array !== this.state.array) {
      const {
        scrollTop, scrollHeight
      } = this.list;

      // 여기서 반환 하는 값은 componentDidMount에서 snapshot값으로 받아올 수 있음
      return {
        scrollTop, scrollHeight
      };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않음
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }
```

#### componentDidUpdate

컴포넌트에서 render()를 호출하고 난 다음에 발생, 이 시점에서는 this.props와 this.state가 바뀌어 있음

파라미터를 통해 이전의 값인 prevProps와 prevState를 조회 할 수 있음.

getSnapshotBeforeUpdate에서 반환한 값을 파라미터 snapshot으로 받아옴

```javascript
componentDidUpdate(prevProps, prevState, snapshot) {

}
```
### 컴포넌트 제거

컴포넌트가 더 이상 필요하지 않게 되면 단 하나의 API가 호출

#### componentWillUnmount

여기서는 주로 등록했었던 이벤트를 제거하고, 만약에 setTimeout을 걸은것이 있다면, clearTimeout을 통하여 제거

추가적으로, 외부 라이브러리를 사용한게 있고, 해당 라이브러리에 dispose기능이 있다면 여기서 호출하면 됨

```javascript
componentWillUnmount() {
  // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
}
```

### 컴포넌트에 에러 발생

#### componentDidCatch

render함수에서 에러가 발생하면, 리액트 앱이 크래쉬 되어버림, 이러한 상황에 유용하게 사용 할 수 있는 API

에러가 발생하면, componentDidCatch가 실행되고, state.error를 true로 설정하고, render함수 쪽에서 이에 따른 에러를 띄어주면 됨

이 API를 사용하게 될 때의 주의할 점은 컴포넌트 자신의 render 함수에서 에러가 발생해버리는 것을 잡아낼 수 없지만,

그 대신, 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있음

```javascript
componentDidCatch(error, info) {
  this.setState({
    error: true
  });
}
```

렌터링 부분에서 오류가 발생하는 것은 사전에 방지해주어야 함.

**주로 에러가 발생하는 이유**

1. 존재하지 않는 함수를 호출하려고 할 때 ( ex) props로 받았을줄 알았던 함수가 전달되지 않았을 때)

```javascript
this.props.onClick();
```

2. 배열이나 객체가 올 줄 알았는데, 해당 객체나 배열이 존재하지 않을 때

```javascript
this.props.object.value; // object is undefined
this.props.array.length; // array is undefined
```

이러한 것들은 render 함수에서 다음과 같은 형식으로 막아 줄 수 있음

```javascript
render() {
  if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
  // object 나 array 를 사용하는 코드
}
```

혹은, 컴포넌트의 기본값을 설정하는 defaultProps를 통해서 설정

```javascript
class Sample extends Component {
  static defaultProps = {
    onIncrement: () => console.warn('onIncrement is not defined'),
    object: {},
    array: []
  }
}
```

### 참고

https://velopert.com/3631 (LifeCycleAPI)