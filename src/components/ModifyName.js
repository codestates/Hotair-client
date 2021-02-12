import React from 'react';
import './popupModify.css';

export default function ModifyName({ toggleModify, sendChangedInfo }) {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="popup-modify popup-active">
      <button className="btn-out" onClick={toggleModify}>
        X
      </button>
      <h3 className="popup-title">change username</h3>
      <p className="description-change">
        input your new username and current password.
      </p>
      <form action="#" className="table-modify" method="post">
        <label htmlFor="inputChangeName" className="name">
          name
          <input id="inputChangeName" type="text" />
        </label>

        <label htmlFor="inputCheckPasswordForName" className="password">
          current password
          <input id="inputCheckPasswordForName" type="password" />
        </label>

        <div className="wrap-btn">
          <button className="btn-cancel" onClick={toggleModify}>
            cancel
          </button>
          <button
            type="button"
            className="btn-done"
            onClick={() => {
              sendChangedInfo('username', username, password);
            }}
          >
            done
          </button>
        </div>
      </form>
    </div>
  );
}
