import React, { Component } from 'react';
import shortid from 'shortid';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameImputId = shortid.generate();

  hendleImputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    const { name } = this.state;
    const newContact = {
      id: shortid.generate(),
      name: name,
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

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { hendleSubmit, hendleImputChange, nameImputId } = this;
    const { contacts, name } = this.state;

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
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, id }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
