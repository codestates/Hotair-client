import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const axios = require('axios');

// 리팩토링 하기~

export default function CommonLogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [input, setInput] = useState({
  //   email: '',
  //   password: '',
  // });
  const history = useHistory();
  const handleSignin = () => {
    // console.log(props.loginHandler);
    // console.log('CommonLogin 에서의 props', props.setupSocket);
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
      .then((res) => {
        localStorage.setItem('CC_Token', res.data.token);
        props.setupSocket();
        history.push('/channels');
      })
      .catch((err) => console.log(err.response));
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
        <button
          onClick={() => {
            history.push('/signup');
          }}
          className="text-green"
          type="button"
        >
          Join us
        </button>
      </Link>
    </div>
  );
}
