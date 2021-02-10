import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

export default function CommonLogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    // console.log(props.loginHandler);
    axios
      .post(
        'http://localhost:4000/users/login',
        {
          email,
          password,
        },
        {
          'Content-Type': 'application/json',
        },
      )
      .then((res) => props.loginHandler(res.data.token))
      .catch((err) => console.log(err.response));

    props.setEmailParam(email);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="wrap-common">
      <form
        action="#"
        className="table-login"
        method="post"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="inputEmail">Email</label>
        <input
          id="inputEmail"
          type="email"
          defaultValue={email}
          onChange={onChangeEmail}
        />
        <label htmlFor="inputPassword">Password</label>
        <input
          id="inputPassword"
          type="password"
          defaultValue={password}
          onChange={onChangePassword}
        />
        <button className="btn-login" type="button" onClick={handleSignin}>
          Login
        </button>
      </form>
      <Link to="/signup" className="link-join">
        Don&apos;t have an ID?
        <button className="text-green" type="button">
          Join us
        </button>
      </Link>
    </div>
  );
}
