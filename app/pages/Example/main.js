import { Component } from 'react';

import UserCard from '../../components/UserCard';
import styles from './main.scss';
import fakeData from './fakeData';

class ExamplePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchUsersRequestStatus: undefined,
      addUsersRequestStatus: undefined,
      removeUsersRequestStatus: undefined,
      reportUsersRequestStatus: undefined,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({
      fetchUsersRequestStatus: 'pending',
      users: [],
    });

    window.setTimeout(() => {
      this.setState({
        users: fakeData,
        fetchUsersRequestStatus: 'success',
      });
    }, 2000);
  }

  handleAddUser(userObject) {
    const newUsers = this.state.users.filter(user =>
      (user.id === userObject.id)
        ? { ...userObject, isFriend: true }
        : user
    );

    // loading
    this.setState({
      addUsersRequestStatus: 'pending',
    });

    // after 2 seconds success
    window.setTimeout(() => {
      this.setState({
        users: newUsers,
        addUsersRequestStatus: 'success',
      });
    }, 2000);

  }

  handleAddRemoveUser(userObject) {
    const newUsers = this.state.users.filter(user =>
      (user.id === userObject.id)
        ? { ...userObject, isFriend: false }
        : user
    );

    // loading
    this.setState({
      users: newUsers,
      removeUsersRequestStatus: 'pending',
    });

    // after 2 seconds success
    window.setTimeout(() => {
      this.setState({
        users: newUsers,
        removeUsersRequestStatus: 'success',
      });
    }, 2000);
  }

  handleReportUser(userObject) {
    const newUsers = this.state.users.filter(user =>
      (user.id === userObject.id)
        ? { ...userObject, reported: true }
        : user
    );

    // loading
    this.setState({
      reportUsersRequestStatus: 'pending',
    });

    // after 2 seconds success
    window.setTimeout(() => {
      this.setState({
        users: newUsers,
        reportUsersRequestStatus: 'success',
      });
    }, 2000);
  }

  render() {
    const { users } = this.state;

    return (
      <div className={styles['example-page']}>
        {users.map((user, i) =>
          <div className={styles['example-page-user-item']}>
            <UserCard
              name={user.name}
              job={user.job}
              onAdd={this.handleAddUser}
              onRemove={this.handleAddRemoveUser}
              onReport={this.handleAddRemoveUser}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ExamplePage;