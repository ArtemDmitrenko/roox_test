import React from 'react';
import './style/style.scss';
import ShortCard from './components/ShortCard/ShortCard';
import Title from './components/Title/Title';

import './app.scss';

function App() {
  const shortCardItemsArray = [
    {
      title: 'ФИО:',
      text: 'Иванов А.А.',
    },
    {
      title: 'город:',
      text: 'Москва',
    },
    {
      title: 'компания:',
      text: 'ООО "Рога и копыта"',
    },
  ];

  return (
    <div className="all-users">
      <div className="all-users__sidebar">
        <div className="all-users__sidebar-title">
          Сортировка
        </div>
        <div className="all-users__button">
          Сортировка
        </div>
      </div>
      <div className="all-users__list">
        <div className="all-users__title">
          <Title text="Список пользователей" />
        </div>
        <div className="all-users__all-cards">
          <div className="all-users__shortCard">
            <ShortCard cardItems={shortCardItemsArray} />
          </div>
          <div className="all-users__shortCard">
            <ShortCard cardItems={shortCardItemsArray} />
          </div>
        </div>
        <div className="all-users__total">
          Найдено 10 пользователей
        </div>
      </div>
    </div>
  );
}

export default App;
