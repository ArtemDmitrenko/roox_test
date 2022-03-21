import React from 'react';

import ShortCardItem from '../ShortCardItem/ShortCardItem';
import Reference from '../Reference/Reference';
import { User } from '../../types/user';

import './shortCard.scss';

type ShortCardProps = {
  user: User,
  onClick: (id: number) => void
};

function ShortCard(props: ShortCardProps) {
  const {
    user: {
      id, name, address, company,
    }, onClick,
  } = props;

  const handleOnClick = () => {
    onClick(id);
  };

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
      <div className="short-card__button">
        <Reference
          text="Подробнее"
          isButton
          buttonType="button"
          onClick={handleOnClick}
          type="directed"
        />
      </div>
    </div>
  );
}

export default ShortCard;
