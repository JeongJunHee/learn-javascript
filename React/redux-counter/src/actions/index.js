// action 객체를 만드는 action 생성자 선언 (action creators)
import * as types from './ActionTypes';

export const create = (color) => ({
  type: types.CREATE,
  color
});

export const remove = () => ({
  type: types.REMOVE
});

export const increment = (index) => ({
  type: types.INCREMENT,
  index
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index
});

export const setColor = (index, color) => ({
  type: types.SET_COLOR,
  index,
  color
});