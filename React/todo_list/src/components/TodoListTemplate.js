import React from 'react';
import './TodoListTemplate.css';

// 함수형 컴포넌트, 파라미터로 받게 되는 것은 props
// 비구조화 할당 하여 원래 (props) => { ... } 해야 하는 것을 ({form, children}) => { ... } 형태로 작성
const TodoListTemplate = ({palette, form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="palette">
      {palette}
      </section>
      <section className="form-wrapper">
      {form}
      </section>
      <section className="todos-wrapper">
      {children}
      </section>
    </main>
  )
}

export default TodoListTemplate;