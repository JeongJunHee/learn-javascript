import * as types from '../actions/ActionTypes';

// 초기 상태 정의
const initialState = {
  color: 'black',
  number: 0
};

// 리듀서 함수는 state와 action을 파라미터로 가지는 함수
// 내부에 switch문을 통하여 action.type에 따라 상태에 변화를 일으킴
// state를 직접 수정하면 안되고, 기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야함
function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};

export default counter;