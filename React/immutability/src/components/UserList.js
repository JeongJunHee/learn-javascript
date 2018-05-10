import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.users !== this.props.users;
  }

  renderUser = () => {
    const { users } = this.props;
    return users.map((user) => (
      <User key={user.id} user={user} />
    ))
  }

  render() {
    const { renderUser } = this;

    return (
      <div>
        { renderUser() }
      </div>
    )
  }
}

export default UserList;