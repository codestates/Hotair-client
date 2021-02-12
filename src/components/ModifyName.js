import React from 'react';

export default function ModifyName() {
  return (
    <div className="popup-modify popup-active disabled">
      <button className="btn-out">X</button>
      <h3 className="small-head">change username</h3>
      <p className="description-change">
        input your new username and current password.
      </p>
      <form action="#" className="table-modify" method="post">
        <label htmlFor="inputChangeName">name</label>
        <input id="inputChangeName" type="text" />
        <label htmlFor="inputCheckPasswordForName">current password</label>
        <input id="inputCheckPasswordForName" type="text" />
        <button className="btn-cancel">cancel</button>
        <button className="btn-done">done</button>
      </form>
    </div>
  );
}
