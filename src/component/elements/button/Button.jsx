import React from 'react';
import styled from './Button.module.css';

const Button = (props) => {
  const {onClick, text, variant = 'primary', size = 'md'} = props;

  return (
    <div className={styled.wrapper}>
      {variant === 'primary' && (
        <button
          className={`${styled.button} ${styled.primary} ${styled.md} `}
          onClick={onClick}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
