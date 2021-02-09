import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TopLogo from '../components/TopLogo';
// import SignupForm from '../components/SignupForm';

const axios = require('axios');

// axios.defaults.withCredentials = true;
export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = () => {
    axios
      .post(
        'http://localhost:4000/users/signup',
        {
          username,
          email,
          password,
          phone,
        },
        {
          'Content-Type': 'application/json',
        },
      )
      .then((res) => JSON.parse(res))
      .then(console.log);
    // .catch((errors) => console.log('이게 에러라네', errors));
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <TopLogo />
      <div className="wrap-join">
        <h2 className="semi-title join-us">join us !</h2>
        <section className="join big-round">
          <form
            action="#"
            className="table-join"
            method="post"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="inputJoinEmail">email</label>
            <input
              id="inputJoinEmail"
              type="text"
              defaultValue={email}
              onChange={onChangeEmail}
            />
            <label htmlFor="inputJoinName">name</label>
            <input
              id="inputJoinName"
              type="text"
              defaultValue={username}
              onChange={onChangeUsername}
            />
            <label htmlFor="inputJoinPassword">password</label>
            <input
              id="inputJoinPassword"
              type="text"
              defaultValue={password}
              onChange={onChangePassword}
            />
            <label htmlFor="inputJoinPasswordAgain">password again</label>
            <input
              id="inputJoinPasswordAgain"
              type="text"
              defaultValue={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            <label htmlFor="inputJoinPhoneNumber">phone number</label>
            <input
              id="inputJoinPhoneNumber"
              type="text"
              defaultValue={phone}
              onChange={onChangePhone}
            />
            <button
              className="btn-signUp green"
              type="button"
              onClick={handleSignup}
            >
              Sign up
            </button>
            {errorMessage ? (
              <div className="alert-box">{setErrorMessage}</div>
            ) : (
              <div className="alert-box"></div>
            )}
          </form>
          <Link to="/" className="link-login">
            Already have an account?
            <button className="text-green" type="button">
              Click Here!
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}
