import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './moduls/ContactForm/ContactForm';
import Title from './shared/components/Titile/Titile';
import ContactList from './moduls/ContactList/ContactList';
import ContactFilter from './moduls/ContactFilter/ContactFilter';

import styles from './app.module.scss';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    if (this.isDuplicated(name)) {
      Notify.failure(`${name} is already in contacts.`);
      return false;
    } else if (this.isDuplicated(number)) {
      Notify.failure(`Number ${number} is already in contacts.`);
      return false;
    } else {
      this.setState(({ contacts }) => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return {
          contacts: [newContact, ...contacts],
        };
      });
      return true;
    }
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
      );
    });

    return result;
  }
  removeContact = elId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== elId),
      };
    });
  };
  isDuplicated(searchEl) {
    const { contacts } = this.state;
    const result = contacts.find(({ name, number }) => {
      return (
        name.toLocaleLowerCase() === searchEl.toLocaleLowerCase() ||
        number === searchEl
      );
    });
    return (
      Boolean(result) ?? Notify.failure(`${searchEl} is already in contacts.`)
    );
  }
  render() {
    const { addContact, handleFilter, removeContact } = this;
    const filterdContacts = this.getFilteredContacts();

    return (
      <div className={styles.wrapper}>
        <Title text="Phonebook" />
        <ContactForm onSubmit={addContact} />
        <Title text="Contacts" />
        <ContactFilter handleChange={handleFilter} value={this.state.filter} />
        <ContactList contacts={filterdContacts} handleRemove={removeContact} />
      </div>
    );
  }
}
