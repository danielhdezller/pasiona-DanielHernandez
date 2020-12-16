import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from '../redux/todoReducers';
import renderer from 'react-test-renderer';
import TodoList from '../containers/TodoList';

const initialState = {
  todoStore: {
    todos: [{ id: 0, title: 'hola', date: '2020-12-10' }],
    index: 0,
  },
};

const store = createStore(todoReducer, initialState);

test('renders correctly the TodoList', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <TodoList />{' '}
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
