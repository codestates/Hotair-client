import React from 'react';

export default function SignupForm() {
  return (
    <form action="#" className="table-join" method="post">
      <label htmlFor="inputJoinEmail">email</label>
      <input id="inputJoinEmail" type="text" />
      <label htmlFor="inputJoinName">name</label>
      <input id="inputJoinName" type="text" />
      <label htmlFor="inputJoinPassword">password</label>
      <input id="inputJoinPassword" type="text" />
      <label htmlFor="inputJoinPasswordAgain">password again</label>
      <input id="inputJoinPasswordAgain" type="text" />
      <label htmlFor="inputJoinPhoneNumber">phone number</label>
      <input id="inputJoinPhoneNumber" type="text" />
      <button className="btn-signUp green" type="button">
        Sign up
      </button>
    </form>
  );
}
