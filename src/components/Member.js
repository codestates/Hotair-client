import React from 'react';

export default function Member({ name }) {
  return (
    <li className="item-member">
      <span>{name}</span>
    </li>
  );
}
