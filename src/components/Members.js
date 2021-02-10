import React from 'react';
import Member from './Member';

export default function Members() {
  const fakeData = [
    { id: 1, name: 'mari' },
    { id: 2, name: 'soonduck' },
    { id: 3, name: 'hodoo' },
  ];
  return (
    <>
      <div className="wrap-member">
        <h3>Member</h3>
        <ul className="list-member">
          {fakeData.map(({ id, name }) => (
            <Member key={id} name={name} />
          ))}
        </ul>
      </div>
    </>
  );
}
