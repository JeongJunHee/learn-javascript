import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info : {
      name : '이름',
      phone : '010-0000-0000',
      id : 0
    }
  }

  state = {
    editing : false,
    name : '',
    phone : '',
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing : !editing })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name] : value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {info, onUpdate} = this.props;
    if(!prevState.editing && this.state.editing) {
      this.setState({
        name : info.name,
        phone : info.phone
      })
    }

    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
      return false;
    }
    return true;
  }

  render() {
    console.log('render PhoneInfo ' + this.props.info.id);

    // const style = {
    //   border : '1px solid black',
    //   padding : '8px',
    //   margin : '8px'
    // };

    const style = {
      'margin' : '10px 10px 10px 10px'
    }

    const { editing } = this.state;

    if (editing) { // 수정모드
      return (
        <div className="panel panel-default">
          <div style={style}>
            <input className="form-control"
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div style={style}>
            <input className="form-control"
              value={this.state.phone}
              name="phone"
              placeholder="전화번호"
              onChange={this.handleChange}
            />
          </div>
          <button style={style} className="btn btn-default" onClick={this.handleToggleEdit}>적용</button>
          <button style={style} className="btn btn-default" onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }

    const { name, phone } = this.props.info;

    return (
      <div className="panel panel-default">
        <div style={style}><b>{name}</b></div>
        <div style={style}>{phone}</div>
        <button style={style} className="btn btn-default" onClick={this.handleToggleEdit}>수정</button>
        <button style={style} className="btn btn-default" onClick={this.handleRemove}>삭제</button>
      </div>
    )
  }
}

export default PhoneInfo;
