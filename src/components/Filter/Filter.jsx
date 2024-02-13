import React from 'react';

export default function Filter({ id, value, changeFilter }) {
  return (
    <div>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" value={value} id={id} onChange={changeFilter} />
    </div>
  );
}
