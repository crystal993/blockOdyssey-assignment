import React from 'react';
import styled from './Input.module.css';

const Input = (props) => {
  const {onChange, placeholder, required, value, label = ''} = props;
  return (
    <div className={`${styled.wrapper}`}>
      <label>{label}</label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        required={required}
      />
    </div>
  );
};

export default Input;
