import React from 'react';

const Button = ({ name, type, onClick }) => (
  <button type={type} onClick={onClick}>
    {name}
  </button>
);

export default Button;
