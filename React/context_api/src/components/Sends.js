import React, { Component } from 'react';
import { useSample } from '../contexts/sample';
// import { SampleConsumer, useSample } from '../contexts/sample';

class Sends extends Component {
  state = {
    input: ''
  }

  componentDidMount() {
    // 초기 값 설정
    this.setState({
      input: this.state.value
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //  props로 받은 setValue 호출
    this.props.setValue(this.state.input);
  }

  render() {
    return (
      <form style={{display : 'flex'}} onSubmit={this.handleSubmit}>
        <input className="form-control" value={this.state.input} onChange={this.handleChange} />
        <button className="btn btn-default" type="submit">설정</button>
      </form>
    )
  }
}

// Consumer를 사용하여 context 값을 전달해준 컨테이너 컴포넌트
// const SendsContainer = () => (
//   <SampleConsumer>
//     {
//       ({state, actions}) => (
//         <Sends value={state.value} setValue={actions.setValue}/>
//       )
//     }
//   </SampleConsumer>
// )

export default useSample(Sends);