import React from 'react';

export default function ModifyEmail() {
  return (
    <div className="popup-modify popup-active disabled">
      <button className="btn-out">X</button>
      <h3 className="small-head">change email</h3>
      <p className="description-change">
        input your new email and current password.
      </p>
      <form action="#" className="table-modify" method="post">
        <label htmlFor="inputChangeEmail">email</label>
        <input id="inputChangeEmail" type="text" />
        <label htmlFor="inputCheckPasswordForEmail">current password</label>
        <input id="inputCheckPasswordForEmail" type="text" />
        <button className="btn-cancel">cancel</button>
        <button className="btn-done">done</button>
      </form>
    </div>
  );
}
