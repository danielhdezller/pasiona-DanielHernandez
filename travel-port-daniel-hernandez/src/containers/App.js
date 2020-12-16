import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import TodoInput from '../components/TodoInput';
import TodoList from './TodoList';

function App() {
  return (
    <div className='App m-5'>
      <main className='container'>
        <h1>What's next?</h1>
        <TodoInput />
        <h3>This are your task to do</h3>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
