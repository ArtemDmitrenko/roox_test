import React from 'react';
import ShortCardItem from '../ShortCardItem/ShortCardItem';
import { User } from '../../types/user';
import './shortCard.scss';

type ShortCardProps = {
  user: User,
};

function ShortCard(props: ShortCardProps) {
  const {
    user: { name, address, company },
  } = props;

  return (
    <div className="short-card">
      <div className="short-card__data">
        <div className="short-card__item">
          <ShortCardItem
            title="ФИО:"
            text={name}
          />
        </div>
        <div className="short-card__item">
          <ShortCardItem
            title="город:"
            text={address.city}
          />
        </div>
        <div className="short-card__item">
          <ShortCardItem
            title="компания:"
            text={company.name}
          />
        </div>
      </div>
      <div className="short-card__button">Подробнее</div>
    </div>
  );
}

export default ShortCard;
