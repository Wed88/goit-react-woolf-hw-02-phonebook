import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList({ contacts }) {
  return (
    <>
      {contacts && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
}
