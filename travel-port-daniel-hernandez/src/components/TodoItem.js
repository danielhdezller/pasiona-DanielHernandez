import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TodoItem({ todo }) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  let dispatch = useDispatch();
  return (
    <div className='row mx-4 align-items-center'>
      <div className='col'>
        {edit ? (
          <input
            type='text'
            className='form-control'
            placeholder={todo.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          todo.title
        )}
      </div>
      <div className='col'>{todo.date}</div>
      <button
        onClick={() => {
          dispatch({ type: 'UPDATE_TODO', payload: { ...todo, title: title } });
          setEdit(!edit);
        }}
        className='btn btn-primary m-2 btn-sm custom-btn'
      >
        {edit ? 'Update' : 'Edit'}
      </button>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        className=' btn btn-outline-danger m-2 btn-sm custom-btn'
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
