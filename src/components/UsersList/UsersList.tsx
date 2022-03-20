import React from 'react';
import './usersList.scss';
import { User } from '../../types/user';

import ShortCard from '../ShortCard/ShortCard';
import Title from '../Title/Title';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

type AllUsersPageProps = {
  title?: string,
  usersList?: Array<User>,
  onClick: (id: number) => void,
  isLoaded: boolean
};

const defaultArray = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

function UsersList(props: AllUsersPageProps) {
  const {
    title = 'Крутой заголовок',
    usersList = defaultArray,
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