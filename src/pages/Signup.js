import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

import TopLogo from '../components/TopLogo';

const axios = require('axios');

// axios.defaults.withCredentials = true;
export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  // ! hiring assessment 에서 봤던 this.props.history.push("/") 를 함수형 컴포넌트에서 활용하기

  const handleSignup = () => {
    if (password !== passwordCheck) {
      return setErrorMessage('비밀번호를 동일하게 작성하지 않았습니다.');
    } else {
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
        .then((res) => setErrorMessage(res.data.message))
        .then(() => history.push('/login'))
        .catch((error) => setErrorMessage(error.response.data.message));
    }
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
              type="password"
              defaultValue={password}
              onChange={onChangePassword}
            />
            <label htmlFor="inputJoinPasswordAgain">password again</label>
            <input
              id="inputJoinPasswordAgain"
              type="password"
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
              type="reset"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </form>
          <Link to="/" className="link-login">
            Already have an account?
            <button className="text-green" type="button">
              Click Here!
            </button>
          </Link>
          {errorMessage ? (
            <span className="error-msg">{errorMessage}</span>
          ) : (
            <span className="error-msg" />
          )}
        </section>
      </div>
    </>
  );
}
