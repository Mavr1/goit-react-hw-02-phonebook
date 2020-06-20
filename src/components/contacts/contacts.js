import React from 'react';
import shortid from 'shortid';
import Button from '../button/Button';

const Contacts = ({ contacts }) => {
  return (
    <ul className="contactsList">
      {contacts.map((item) => (
        <li key={shortid.generate()}>
          <span className="contactName">{item.name}</span>
          <Button name="Delete" clsn="btnDelete" />
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
