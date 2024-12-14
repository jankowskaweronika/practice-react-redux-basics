import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { addUser } from '../actions/actions';

class UserList extends React.Component {
  state = {
    userName: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const ids = this.props.users.map((user) => user.id);
    this.props.addUser({
      name: this.state.userName,
      id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
    });
    this.setState({ userName: '' });
  };
  render() {
    const { users } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>
        <ul>
          {users.map((user) => (
            <UserItem key={user.id} name={user.name} id={user.id} />
          ))}
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapActionToProps = {
  addUser: addUser,
};
export default connect(mapStateToProps, mapActionToProps)(UserList); 