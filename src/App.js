import React, { Component } from 'react';
import Section from './components/section/Section';
import AddContactform from './components/addContactform/AddContactform';
import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';
import './App.css';

const filterContacts = (array, value) =>
  array.filter((item) => item.name.includes(value));

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'John Stockton', number: '907-94-00' },
      { id: 'id-6', name: 'Gary Payton', number: '867-23-80' },
    ],
    filter: null,
  };

  addContact = (newContact) =>
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, newContact] };
    });

  handleFilter = (e) => this.setState({ filter: e.target.value });

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Section>
          <AddContactform addContact={this.addContact} />
        </Section>
        <Section name="Contacts">
          <Filter onChange={this.handleFilter} />
          <Contacts
            contacts={
              this.state.filter !== null
                ? filterContacts(this.state.contacts, this.state.filter)
                : this.state.contacts
            }
          />
        </Section>
      </div>
    );
  }
}

export default App;
