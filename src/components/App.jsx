import React, { Component } from 'react';
import shortid from 'shortid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameImputId = shortid.generate();
  numberImputId = shortid.generate();
  filterImputId = shortid.generate();

  hendleImputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.formOnSubmitContact(newContact);

    this.reset();
  };

  formOnSubmitContact = newContact => {
    const compareContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    compareContact
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    const {
      hendleSubmit,
      hendleImputChange,
      changeFilter,
      nameImputId,
      numberImputId,
      filterImputId,
    } = this;
    const { contacts, name, number, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibledContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={hendleSubmit}>
          <label htmlFor={nameImputId}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={hendleImputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={numberImputId}>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={hendleImputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="">Find contacts by name</label>
        <input
          type="text"
          value={filter}
          id={filterImputId}
          onChange={changeFilter}
        />
        <ul>
          {visibledContacts.map(({ name, id, number }) => (
            <li key={id}>
              <p>
                {name}:&nbsp; {number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
