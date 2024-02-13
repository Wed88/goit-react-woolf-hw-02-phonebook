import React from 'react';

export default function ContactItem({ name, number }) {
  return (
    <li>
      <p>
        {name}:&nbsp; {number}
      </p>
    </li>
  );
}
