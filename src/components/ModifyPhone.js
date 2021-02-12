import React from 'react';

export default function ModifyPhone() {
  return (
    <div className="popup-modify popup-active disabled">
      <button className="btn-out">X</button>
      <h3 className="small-head">add phone number</h3>
      <p className="description-change">add your phone number.</p>
      <form action="#" className="table-modify" method="post">
        <label htmlFor="inputChangePhoneNumber">phone number</label>
        <input id="inputChangePhoneNumber" type="text" />
        <button className="btn-cancel">cancel</button>
        <button className="btn-done">done</button>
      </form>
    </div>
  );
}
