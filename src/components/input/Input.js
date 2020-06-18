import React from 'react';

const Input = ({ label, type, name, placeholder, value, onChange }) => (
  <label>
    {label}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </label>
);

Input.defaultProps = {
  type: 'text',
};

export default Input;
