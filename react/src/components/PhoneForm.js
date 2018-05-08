import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name : '',
    phone : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name : '',
      phone : ''
    })
  }

  render() {
    const style = {
      'margin' : '10px 0px 10px 10px'
    }

    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input style={style} className="form-control" placeholder="이름"   value={this.state.name} onChange={this.handleChange} name="name"/>
        <input style={style} className="form-control" placeholder="전화번호" value={this.state.phone} onChange={this.handleChange} name="phone"/>
        <button style={style} className="btn btn-default" type="submit">등록</button>
      </form>
    )
  }
}

export default PhoneForm
