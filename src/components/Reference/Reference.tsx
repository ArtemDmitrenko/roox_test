import React from 'react';
import './reference.scss';

type ReferenceProps = {
  isButton?: boolean,
  buttonType?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  text: string,
  href?: string,
  onClick?: () => void,
};

function Reference(props: ReferenceProps) {
  const {
    isButton,
    buttonType,
    disabled,
    text,
    href = '/',
    onClick,
  } = props;

  return (
    isButton
      ? (
        <button
          type={
            (buttonType === 'submit' ? 'submit' : 'button')
          }
          disabled={disabled}
          className="reference-button"
          onClick={onClick}
        >
          {text}
        </button>
      )
      : (
        <a href={href} onClick={onClick} className=".reference-link">
          {text}
        </a>
      )
  );
}

export default Reference;
