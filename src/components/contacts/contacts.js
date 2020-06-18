import React from 'react';
import shortid from 'shortid';

const Contacts = ({ contacts }) => {
  return (
    <ul className="contactsList">
      {contacts.map((item) => (
        <li key={shortid.generate()}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Contacts;
