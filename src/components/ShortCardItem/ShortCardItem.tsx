import React from 'react';

import './shortCardItem.scss';

type ShortCardItemProps = {
  title?: string;
  text?: string;
};

function ShortCardItem(props: ShortCardItemProps) {
  const {
    title = 'ФИО',
    text = 'Петров А.А.',
  } = props;

  return (
    <div className="short-cart-item">
      <p className="short-card-item__title">
        {title}
        <span className="short-card-item__text">
          &nbsp;&nbsp;
          {text}
        </span>
      </p>
    </div>

  );
}

export type { ShortCardItemProps };
export default ShortCardItem;
