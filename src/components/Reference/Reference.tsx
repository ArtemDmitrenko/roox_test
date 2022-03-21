import React from 'react';

import './reference.scss';

type ReferenceProps = {
  isButton?: boolean,
  buttonType?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  text: string,
  href?: string,
  type?: string,
  bgColor?: string,
  onClick?: () => void,
};

function Reference(props: ReferenceProps) {
  const {
    isButton,
    buttonType,
    disabled,
    text,
    href = '/',
    type = 'solid',
    bgColor,
    onClick,
  } = props;

  const classesArr: Array<string> = ['reference-button'];

  if (type === 'directed') classesArr.push('reference-button__directed');
  if (type === 'solid') classesArr.push('reference-button__solid');
  if (bgColor === 'blue') classesArr.push('reference-button_blue');
  if (bgColor === 'green') classesArr.push('reference-button_green');

  const classes = classesArr.join(' ');

  return (
    isButton
      ? (
        <button
          type={
            (buttonType === 'submit' ? 'submit' : 'button')
          }
          disabled={disabled}
          className={classes}
          onClick={onClick}
        >
          {text}
        </button>
      )
      : (
        <a href={href} className={classes}>
          {text}
        </a>
      )
  );
}

export default Reference;
