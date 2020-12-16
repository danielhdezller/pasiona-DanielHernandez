import { createStore, combineReducers } from 'redux';
import todoReducers from './todoReducers';

const rootReducer = combineReducers({
  todoStore: todoReducers,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
