// React에서 컴포넌트를 정의 할 때는 봍옹 EcmaScript에 도입된 class 문법을 사용
// 컴포넌트에서 라이프사이클 API를 사용해야 하거나, state를 사용하는 경우 class로 정의를 해야함
import React, { Component } from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>Hello { this.props.name }</div>
    )
  }
}

export default Hello;

// 만약, 컴포넌트가 라이프사이클 API를 사용하지 않고, state도 사용하지 않으며,
// 컴포넌트가 props만 전달하여 뷰를 렌더링 할 수 있다면 함수형 컴포넌트 형식으로 컴포넌트 정의 가능
import React from 'react';

function Hellp(props) {
  return (
    <div>Hello { props.name }</div>
  );
}

export default Hello;

// ES6의 화살표 함수를 사용
import React from 'react';

const Hello = ({ name }) => {
  return (
    <div>Hello { name }</div>
  )
}

export default Hello;