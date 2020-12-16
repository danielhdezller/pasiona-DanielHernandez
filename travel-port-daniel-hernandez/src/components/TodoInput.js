import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TodoInput() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [completed, setCompleted] = useState(true);
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  const todos = { id: id, title: title, date: date };
  return (
    <div>
      <div className=' m-4'>
        <div className='row m-4 d-flex justify-content-center'>
          <input
            type='text'
            className='w-50 form-control mx-2'
            id='title'
            onChange={(e) => setTitle(e.target.value)}
            required
            value={title}
          />
          <input
            type='date'
            className='w-25 form-control mx-2'
            id='date'
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
          <button
            className='btn btn-success mx-2 custom-btn'
            onClick={() => {
              if (title && date) {
                dispatch({ type: 'ADD_TODO', payload: todos });
                setId(id + 1);
                setTitle('');
                setDate('');
                setCompleted(true);
              } else {
                setCompleted(false);
              }
            }}
          >
            Add Todo
          </button>
          {completed ? (
            ''
          ) : (
            <div className='custom-error'>'add a date and a title ;)'</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
