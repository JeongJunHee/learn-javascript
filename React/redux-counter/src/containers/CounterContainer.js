import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store안의 state값을 props로 연결
const mapStateToProps = (state) => ({
  color: state.color,
  number: state.number
});

// action 생성자를 사용하여 action을 생성하고
// 해당 action을 dispatch하는 함수를 만든 후, 이를 props로 연결
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
})

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);


export default CounterContainer;