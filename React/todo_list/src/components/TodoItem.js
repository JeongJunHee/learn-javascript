import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.checked !== nextProps.checked;
	}

	render() {
		const { text, checked, id, onToggle, onRemove, color } = this.props;

		console.log(id);

		return (
			<div className="todo-item" onClick={() => onToggle(id)}>
				<div className="remove" onClick={(e) => {
					e.stopPropagation();	// onToggle이 실행되지 않도록 함
					onRemove(id)}
				}>&times;</div>
				<div className={`todo-text ${checked && 'checked'}`}>
					<div style={{color}}>{text}</div>
				</div>
				{
					checked && (<div className="check-mark">✓</div>)
				}
			</div>
		)
	}
}

export default TodoItem;