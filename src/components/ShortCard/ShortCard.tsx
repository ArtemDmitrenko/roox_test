import React from 'react';
import ShortCardItem, { ShortCardItemProps } from '../ShortCardItem/ShortCardItem';
import './shortCard.scss';

type ShortCardProps = {
  cardItems?: Array<ShortCardItemProps>,
};

function ShortCard(props: ShortCardProps) {
  const defaultArray = [
    {
      title: 'ФИО',
      text: 'Иванов А.А.',
    },
    {
      title: 'ФИО',
      text: 'Иванов А.А.',
    },
    {
      title: 'ФИО',
      text: 'Иванов А.А.',
    },
  ];
  const {
    cardItems = defaultArray,
  } = props;

  return (
    <div className="short-card">
      <div className="short-card__data">
        {cardItems.map((item) => (
          <div className="short-card__item" key={item.text}>
            <ShortCardItem
              title={item.title}
              text={item.text}
            />
          </div>
        ))}
      </div>
      <div className="short-card__button">Подробнее</div>
    </div>
  );
}

export default ShortCard;
