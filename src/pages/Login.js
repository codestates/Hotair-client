import React, { useState, useEffect } from 'react';
import CommonLogin from '../components/CommonLogin';
import SocialLogin from '../components/SocialLogin';
import GuestLogin from '../components/GuestLogin';
import TopLogo from '../components/TopLogo';
import Logo from '../assets/img/logo.svg';

import { useHistory } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [emailParam, setEmailParam] = useState('');

  const history = useHistory();

  const loginHandler = (data) => {
    setIsLogin(true);
    setAccessToken(data);
  };

  useEffect(() => {
    if (isLogin) {
      console.log('IsLogin >>>>>', isLogin);
      let headEmail = emailParam.split('@')[0];
      console.log(headEmail);
      history.push(`/main/${headEmail}`);
    }
  }, [isLogin, accessToken]);

  return (
    <>
      <TopLogo />
      <div className="wrap-login">
        <h1 className="logo mobile">
          <img className="img-logo" src={Logo} alt="Hotair" />
        </h1>
        <h2 className="welcome semi-title">Welcome!</h2>
        <section className="login big-round">
          <CommonLogin
            loginHandler={loginHandler}
            setEmailParam={setEmailParam}
          />
          <SocialLogin />
        </section>
        <GuestLogin />
      </div>
    </>
  );
}
