import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from '../redux/todoReducers';
import renderer from 'react-test-renderer';
import App from '../containers/App';

const initialState = {
  todoStore: {
    todos: [{ id: 0, title: 'hola', date: '2020-12-10' }],
    index: 0,
  },
};

const store = createStore(todoReducer, initialState);

test('renders correctly the App', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
