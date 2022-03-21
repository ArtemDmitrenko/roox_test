import React from 'react';

import './title.scss';

type TitleProps = {
  text?: string;
};

function Title(props: TitleProps) {
  const {
    text = 'Заголовок',
  } = props;

  return (
    <h1 className="title">
      {text}
    </h1>
  );
}

export default Title;
