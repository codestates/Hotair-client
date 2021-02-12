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

  useEffect(() => {
    const token = localStorage.getItem('CC_Token');
    const payload = JSON.parse(atob(token.split('.')[1]));
    axios
      .get(`http://localhost:4000/users/${payload.uuid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setMyInfo(data.data);
        console.log(myInfo);
      });
  }, []);

  const toggleModify = () => {
    setModify({ disabled: !modify.disabled });
  };
  const sendChangedInfo = (prop, value, password) => {
    // axios.post(
    //   'http://localhost:4000/users/login',
    //   {
    //     email: myInfo.email,
    //     password,
    //   },
    //   {
    //     'Content-Type': 'application/json',
    //   },
    // );
    axios
      .post(`http://localhost:4000/users/updateUserInfo/${info.uuid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        ...info,
        prop: value,
        password,
      })
      .then((data) => {});
  };
  const disableAccount = () => {
    console.log(1234);
    axios
      .delete(`http://localhost:4000/users/delete/${info.uuid}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(() => {
        history.push('/login');
      });
    console.log(3232);
  };

  console.log(myInfo);
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
          <span className="username">{myInfo.username}</span>
        </div>
        <div className="userinfo big-round">
          <span className="block small">name</span>
          <div className="wrap-modify">
            <span className="inside-username">{myInfo.username}</span>
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
            <span className="block inside-email">{myInfo.email}</span>
            <button className="modify light">Modify</button>
          </div>
          <ModifyEmail />

          <span className="block small">phone number</span>
          <div className="wrap-modify">
            <span className="block inside-phoneNumber">{myInfo.phone}</span>
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
