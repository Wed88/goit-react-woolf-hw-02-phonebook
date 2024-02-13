import React from 'react';

export default function ContactItem({ name, number, id, onDeleteContact }) {
  return (
    <li>
      <p>
        {name}:&nbsp; {number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
