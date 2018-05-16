import * as types from '../actions/ActionTypes';

// 초기 상태 정의
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

// 리듀서 함수는 state와 action을 파라미터로 가지는 함수
// 내부에 switch문을 통하여 action.type에 따라 상태에 변화를 일으킴
// state를 직접 수정하면 안되고, 기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야함
function counter(state = initialState, action) {
  const { counters } = state;
  switch (action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1)
      };
    case types.INCREMENT:
      return {
        counters : [
          ...counters.slice(0, action.index), // 0 ~ action.index
          {
            ...counters[action.index],  // 기존 값 유지
            number : counters[action.index].number + 1  // number++
          },
          ...counters.slice(action.index + 1, counters.length)  // action.index + 1 ~ 마지막
        ]
      };
    case types.DECREMENT:
      return {
        counters : [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number : counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters : [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color : action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
};

export default counter;