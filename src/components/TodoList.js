import React, { useEffect, useRef } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // const box = useRef(null);

  // const scrollToBottom = () => {
  //   const { clientHeight, scrollHeight } = box.current;
  //   box.current.scrollTop = scrollHeight - clientHeight;
  // };

  // useEffect(scrollToBottom, [todos]);

  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
