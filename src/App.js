import React, { Component } from 'react';
import Section from './components/section/Section';
import AddContactform from './components/addContactform/AddContactform';
import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';
import './App.css';

const filterContacts = (array, value) =>
  array.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

const filterArrayDelete = (array, id) =>
  array.filter((item) => {
    return item.id !== id;
  });

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'John Stockton', number: '907-94-00' },
      { id: 'id-6', name: 'Gary Payton', number: '867-23-80' },
      { id: 'id-7', name: 'Steve Kerr', number: '874-43-11' },
    ],
    filter: null,
  };

  addContact = (newContact) =>
    this.setState((prevState) => {
      if (
        prevState.contacts.find((item) => item.name === newContact.name) ===
        undefined
      ) {
        return { contacts: [...prevState.contacts, newContact] };
      } else {
        alert(`${newContact.name} already exists in contacts`);
      }
    });

  handleFilter = (e) => this.setState({ filter: e.target.value });

  handleDelete = (id) => {
    this.setState((state) => ({
      contacts: filterArrayDelete(state.contacts, id),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Section>
          <AddContactform addContact={this.addContact} />
        </Section>
        <Section name="Contacts">
          {this.state.contacts.length > 1 && (
            <Filter onChange={this.handleFilter} />
          )}
          <Contacts
            contacts={
              this.state.filter !== null
                ? filterContacts(this.state.contacts, this.state.filter)
                : this.state.contacts
            }
            handleClick={this.handleDelete}
          />
        </Section>
      </div>
    );
  }
}

export default App;
