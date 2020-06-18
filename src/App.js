import React, { Component } from 'react';
import './App.css';
import Section from './components/section/Section';
import AddContactform from './components/addContactform/AddContactform';
import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (newContact) =>
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, newContact] };
    });

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Section>
          <AddContactform addContact={this.addContact} />
        </Section>
        <Section name="Contacts">
          <Filter />
          <Contacts contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
