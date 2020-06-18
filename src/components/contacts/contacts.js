const Contacts = ({ contacts }) => (
  <ul className="contactsList">
    {contacts.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

export default Contacts;
