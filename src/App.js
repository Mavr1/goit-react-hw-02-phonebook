import React from 'react';
import './App.css';
import Section from './components/section/Section';
import AddContactform from './components/addContactform/AddContactform';
import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Section>
        <AddContactform />
      </Section>
      <Section>
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
}

export default App;
