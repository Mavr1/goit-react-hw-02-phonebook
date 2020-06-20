import React from 'react';
import shortid from 'shortid';

const Input = ({ label, type, name, placeholder, onChange }) => {
  const id = shortid.generate();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
