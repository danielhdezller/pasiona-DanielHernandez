import todoReducers from '../redux/todoReducers';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(todoReducers(undefined, {})).toEqual({
      todos: [{ id: 0, title: 'hola', date: '2020-12-10' }],
      index: 0,
    });
  });
});
