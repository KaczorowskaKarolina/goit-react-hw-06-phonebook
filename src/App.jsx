import React, { useState } from 'react';
import Form from './components/Form';
import Filter from './components/Filter';
import List from './components/List';
import { nanoid } from 'nanoid';

import css from './styles/app.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContactOnSubmit = ({ name, number }) => {
    const contactOnList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactOnList) {
      alert('This contact is already on Your list');
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts([...contacts, newContact]);
    }
  };

  const deleteContact = contactId => {
    const remainingContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(remainingContacts);
  };

  const onFilterChange = event => {
    event.preventDefault();
    setFilter(event.target.value.toLowerCase());
  };

  const showFilteredContact = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form onSubmit={addContactOnSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterChange} />
      <List contacts={showFilteredContact()} onDelete={deleteContact} />
    </div>
  );
};

export default App;
