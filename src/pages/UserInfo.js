import React from 'react';
import Avatar from '../assets/img/anonymous-user.png';

export default function UserInfo() {
  return (
    <div className="wrap-userinfo">
      <div className="wrap-escape">
        <button className="escape round">X</button>
        <span className="small">ESC</span>
      </div>
      <h2 className="semi-title account-title">My account</h2>
      <section className="main-info big-round">
        <div className="user-avatar">
          <img src={Avatar} alt="username" />
          <span className="username">soonduck🐤</span>
        </div>
        <div className="userinfo big-round">
          <span className="block small">name</span>
          <div className="wrap-modify">
            <span className="inside-username">soonduck</span>
            <button className="modify light">Modify</button>
          </div>
          <div className="popup-modify popup-active disabled">
            <button className="btn-out">X</button>
            <h3 className="small-head">change username</h3>
            <p className="description-change">
              input your new username and current password.
            </p>
            <form action="#" className="table-modify" method="post">
              <label htmlFor="inputChangeName">name</label>
              <input id="inputChangeName" type="text" />
              <label htmlFor="inputCheckPasswordForName">
                current password
              </label>
              <input id="inputCheckPasswordForName" type="text" />
              <button className="btn-cancel">cancel</button>
              <button className="btn-done">done</button>
            </form>
          </div>

          <span className="block small">email</span>
          <div className="wrap-modify">
            <span className="block inside-email">ckexp05@gmail.com</span>
            <button className="modify light">Modify</button>
          </div>
          <div className="popup-modify popup-active disabled">
            <button className="btn-out">X</button>
            <h3 className="small-head">change email</h3>
            <p className="description-change">
              input your new email and current password.
            </p>
            <form action="#" className="table-modify" method="post">
              <label htmlFor="inputChangeEmail">email</label>
              <input id="inputChangeEmail" type="text" />
              <label htmlFor="inputCheckPasswordForEmail">
                current password
              </label>
              <input id="inputCheckPasswordForEmail" type="text" />
              <button className="btn-cancel">cancel</button>
              <button className="btn-done">done</button>
            </form>
          </div>

          <span className="block small">phone number</span>
          <div className="wrap-modify">
            <span className="block inside-phoneNumber">010-1234-5678</span>
            <button className="modify light">Add</button>
          </div>
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
        </div>
      </section>
      <div className="line"></div>
      <section className="auth">
        <h3 className="small-head">Password and authentication</h3>
        <button className="modify dark">Change password</button>
        <h3 className="small-head">Disconnect Hotair</h3>
        <button className="modify dark">Logout</button>
      </section>
    </div>
  );
}
