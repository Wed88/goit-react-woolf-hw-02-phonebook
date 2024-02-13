import React, { Component } from 'react';
import shortid from 'shortid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameImputId = shortid.generate();
  numberImputId = shortid.generate();

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

    this.props.onSubmitContact(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    const { hendleSubmit, nameImputId, hendleImputChange, numberImputId } =
      this;
    const { name, number } = this.state;

    return (
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
    );
  }
}
