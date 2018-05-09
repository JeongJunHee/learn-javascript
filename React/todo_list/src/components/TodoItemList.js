import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemsList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;
    // const todoList = todos.map(
    //   ({ id, text, checked }) => (
    //     <TodoItem
    //       id={id}
    //       text={text}
    //       checked={checked}
    //       onToggle={onToggle}
    //       onRemove={onRemove}
    //     />
    //   )
    // )

    const todoList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      )
    )

    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoItemsList;