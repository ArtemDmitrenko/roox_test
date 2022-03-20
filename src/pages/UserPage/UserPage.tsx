import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import UsersList from '../../components/UsersList/UsersList';
import { User } from '../../types/user';

import './userPage.scss';
import Title from '../../components/Title/Title';
import UserCard from '../../components/UserCard/UserCard';
import validateName from '../../helpers/validateNameAndSurname';
import Reference from '../../components/Reference/Reference';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

type UserData = {
  name: string,
  userName: string,
  email: string,
  street: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string,
  comment: string,
};

type UserItemPageParams = {
  id: string
}

function UserPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [readonly, setReadonly] = useState<boolean>(true);
  const params = useParams<UserItemPageParams>();

  async function fetchUser() {
    try {
      const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      setIsLoaded(true);
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const handleOnClick = () => {
    setReadonly(!readonly);
  };

  const showUser = (userProfile: User | null) => {
    if (userProfile) {
      return (
        <UserCard userData={userProfile} readOnlyData={readonly} />
      );
    }
    return (
      <div>Нет данных о пользователе</div>
    );
  };

  return (
    <div className="user-page">
      <div className="user-page__sidebar">
        <SideBar />
      </div>
      <div className="user-page__user">
        <div className="user-page__titles-block">
          <div className="user-page__title">
            <Title text="Профиль пользователя" />
          </div>
          <div className="user-page__edit-button">
            <Reference
              text="Редактировать"
              isButton
              buttonType="button"
              onClick={handleOnClick}
            />
          </div>
        </div>
        <div className="user-page__form">
          {isLoaded ? (
            showUser(user)
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
