import React from 'react';

import ShortCard from '../ShortCard/ShortCard';
import Title from '../Title/Title';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { User } from '../../types/user';

import './usersList.scss';

type UsersList = {
  title: string,
  usersList: Array<User>,
  onClick: (id: number) => void,
  isLoaded: boolean
};

function UsersList(props: UsersList) {
  const {
    title = 'Крутой заголовок',
    usersList,
    onClick,
    isLoaded,
  } = props;

  const handleOnClick = (id: number) => {
    onClick(id);
  };

  return (
    <div className="users-list">
      <div className="users-list__list">
        <div className="users-list__title">
          <Title text={title} />
        </div>
        {isLoaded ? (
          <>
            <div className="users-list__all-cards">
              {usersList.map((user) => (
                <div className="users-list__shortCard" key={user.id}>
                  <ShortCard user={user} onClick={handleOnClick} />
                </div>
              ))}
            </div>
            <div className="users-list__total">
              Найдено
              {' '}
              {usersList.length}
              {' '}
              пользователей
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}

export default UsersList;
