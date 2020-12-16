import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todoStore.todos);

  return (
    <div className='my-4'>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
