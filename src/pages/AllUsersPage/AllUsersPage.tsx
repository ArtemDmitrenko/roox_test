import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import SideBar from '../../components/SideBar/SideBar';
import UsersList from '../../components/UsersList/UsersList';
import { User } from '../../types/user';
import SortItems from '../../types/sortItems';
import SortingContext from '../../context/sortingContext';

import './allUsersPage.scss';

type AllUsersPageProps = {
  onClick: (id: number) => void;
}

function AllUsersPage(props: AllUsersPageProps) {
  const { onClick } = props;
  const [users, setUsers] = useState<User[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const sortData = (sortItem: string): void => {
    const myData = [...users];
    if (sortItem === SortItems.CITY) {
      myData.sort((a, b) => (a.address.city > b.address.city ? 1 : -1));
    } else if (sortItem === SortItems.COMPANY) {
      myData.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
    }
    setUsers(myData);
  };

  async function fetchUsers() {
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setIsLoaded(true);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const providerValue = useMemo(() => ({ sortData }), [sortData]);

  const handleOnClick = (id: number) => {
    onClick(id);
  };

  return (
    <SortingContext.Provider value={providerValue}>
      <div className="all-users-page">
        <div className="all-users-page__sidebar">
          <SideBar />
        </div>
        <div className="all-users-page__users">
          <UsersList title="Список пользователей" usersList={users} onClick={handleOnClick} isLoaded={isLoaded} />
        </div>
      </div>
    </SortingContext.Provider>
  );
}

export default AllUsersPage;
