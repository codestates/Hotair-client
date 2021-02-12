import React from 'react';

// eslint-disable-next-line react/prop-types
const Member = function ({ name }) {
  return (
    <li className="item-member">
      <span>{name}</span>
    </li>
  );
};

export default Member;
