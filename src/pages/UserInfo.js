import React, { useEffect } from 'react';
import Avatar from '../assets/img/anonymous-user.png';

import ModifyName from '../components/ModifyName';
import ModifyEmail from '../components/ModifyEmail';
import ModifyPhone from '../components/ModifyPhone';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function UserInfo({ info, handleIsInfo }) {
  const token = localStorage.getItem('CC_Token');
  const [myInfo, setMyInfo] = React.useState({});
  const history = useHistory();

  const [modify, setModify] = React.useState({
    disabled: false,
  });
  const [modify2, setModify2] = React.useState({
    disabled: false,
  });

  const toggleModify = () => {
    setModify({ disabled: !modify.disabled });
  };
  const toggleModify2 = () => {
    setModify2({ disabled: !modify2.disabled });
  };
  const sendChangedInfo = (prop, username, password) => {
    axios
      .put(
        `http://localhost:4000/users/updateUserInfo/${info.uuid}`,
        {
          ...info,
          username,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((data) => {
        setMyInfo(data.data);
        toggleModify();
      })
      .then(() => {});
  };

  const sendChangedInfo2 = (prop, email, password) => {
    console.log({ ...info });

    axios
      .put(
        `http://localhost:4000/users/updateUserInfo/${info.uuid}`,
        {
          ...info,
          email: email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((data) => {
        console.log('수정되면 데이터가', data.data);
        setMyInfo(data.data);
        toggleModify2();
      });
  };

  const disableAccount = () => {
    axios
      .delete('http://localhost:4000/users/delete', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        data: {
          uuid: info.uuid,
        },
      })
      .then(() => {
        history.push('/login');
      });
  };

  return (
    <div className="wrap-userinfo">
      <div className="wrap-escape" onClick={handleIsInfo}>
        <button className="escape round">X</button>
        <span className="small">ESC</span>
      </div>
      <h2 className="semi-title account-title">My account</h2>
      <section className="main-info big-round">
        <div className="user-avatar">
          <img src={Avatar} alt="username" />
          <span className="username">{info.username}</span>
        </div>
        <div className="userinfo big-round">
          <span className="block small">name</span>
          <div className="wrap-modify">
            <span className="inside-username">{info.username}</span>
            <button
              className="modify light"
              disabled={modify.disabled}
              onClick={toggleModify}
            >
              Modify
            </button>
          </div>
          {modify.disabled ? (
            <ModifyName
              toggleModify={toggleModify}
              sendChangedInfo={sendChangedInfo}
            />
          ) : (
            <></>
          )}

          <span className="block small">email</span>
          <div className="wrap-modify">
            <span className="block inside-email">{info.email}</span>
            <button
              className="modify light"
              disabled={modify2.disabled}
              onClick={toggleModify2}
            >
              Modify
            </button>
          </div>
          {modify2.disabled ? (
            <ModifyEmail
              toggleModify2={toggleModify2}
              sendChangedInfo2={sendChangedInfo2}
            />
          ) : (
            <></>
          )}

          <span className="block small">phone number</span>
          <div className="wrap-modify">
            <span className="block inside-phoneNumber">{info.phone}</span>
            <button className="modify light">Add</button>
          </div>
          <ModifyPhone />
        </div>
      </section>
      <div className="line" />
      <section className="auth">
        <h3 className="small-head">Password and authentication</h3>
        <button className="modify dark">Change password</button>
        <h3 className="small-head">Account</h3>
        <button className="modify dark" onClick={disableAccount}>
          Disable account
        </button>
      </section>
    </div>
  );
}
