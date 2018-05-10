import React, { Component } from 'react';

class User extends Component {

  shouldComponentUpdate(prevProps, prevState) {
    return this.props.user !== prevProps.user;
  }

  render() {
    const { username } = this.props.user;

    return (
      <div>
        { username }
      </div>
    )
  }
}

export default User;