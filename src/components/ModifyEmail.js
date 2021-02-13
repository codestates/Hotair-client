import React from 'react';
import './popupModify.css';

export default function ModifyEmail({ toggleModify2, sendChangedInfo2 }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="popup-modify popup-active">
      <button className="btn-out" onClick={toggleModify2}>
        X
      </button>
      <h3 className="popup-title">change email</h3>
      <p className="description-change">
        input your new email and current password.
      </p>
      <form action="#" className="table-modify" method="post">
        <label htmlFor="inputChangeEmail" className="email">
          email
        </label>
        <input
          id="inputChangeEmail"
          type="text"
          onChange={onChangeEmail}
          defaultValue={email}
        />
        <label htmlFor="inputCheckPasswordForEmail" className="password">
          current password
        </label>
        <input
          id="inputCheckPasswordForEmail"
          type="password"
          onChange={onChangePassword}
          defaultValue={password}
        />
        <div className="wrap-btn">
          <button className="btn-cancel" onClick={toggleModify2}>
            cancel
          </button>
          <button
            type="button"
            className="btn-done"
            onClick={() => {
              console.log('바뀐이메일 >>>>', email);
              sendChangedInfo2('email', email, password);
            }}
          >
            done
          </button>
        </div>
      </form>
    </div>
  );
}
