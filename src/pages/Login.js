import React, { useState } from 'react';
import CommonLogin from '../components/CommonLogin';
import SocialLogin from '../components/SocialLogin';
import GuestLogin from '../components/GuestLogin';
import TopLogo from '../components/TopLogo';
import Logo from '../assets/img/logo.svg';

import Lobby from './Lobby';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const loginHandler = (data) => {
    setIsLogin(true);
    setAccessToken(data);
  };

  return (
    <>
      {isLogin ? (
        <Lobby accessToken={accessToken} />
      ) : (
        <>
          <TopLogo />
          <div className="wrap-login">
            <h1 className="logo mobile">
              <img className="img-logo" src={Logo} alt="Hotair" />
            </h1>
            <h2 className="welcome semi-title">Welcome!</h2>
            <section className="login big-round">
              <CommonLogin loginHandler={loginHandler} />
              <SocialLogin />
            </section>
            <GuestLogin />
          </div>
        </>
      )}
    </>
  );
}
