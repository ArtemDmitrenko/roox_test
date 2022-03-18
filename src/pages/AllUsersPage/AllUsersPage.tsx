import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../../components/SideBar/SideBar';
import UsersList from '../../components/UsersList/UsersList';
import { User } from '../../types/user';

import './allUsersPage.scss';

function AllUsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // const myData = [].concat(users)
  // .sort((a, b) => (a.itemM > b.itemM ? 1 : -1))
  // .map((item, i) => (
  //   <div key={i}>
  //     {' '}
  //     {item.matchID}
  //     {' '}
  //     {item.timeM}
  //     {item.description}
  //   </div>
  // ));

  return (
    <div className="all-users-page">
      <div className="all-users-page__sidebar">
        <SideBar />
      </div>
      <div className="all-users-page__users">
        <UsersList title="Список пользователей" usersList={users} />
      </div>
    </div>
  );
}

export default AllUsersPage;
