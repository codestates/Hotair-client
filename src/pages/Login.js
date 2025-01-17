import React, { useState, useEffect } from 'react';
import CommonLogin from '../components/CommonLogin';
import SocialLogin from '../components/SocialLogin';
import GuestLogin from '../components/GuestLogin';
import TopLogo from '../components/TopLogo';
import Logo from '../assets/img/logo.svg';
import axios from 'axios';
import { useHistory, withRouter } from 'react-router-dom';
function Login(props) {
  const history = useHistory();
  useEffect(async () => {
    const getAccessToken = async (authorizationCode) => {
      let tokenData = (
        await axios.post('http://localhost:4000/github/login/callback', {
          authorizationCode,
        })
      ).data.token;
      localStorage.setItem('CC_Token', tokenData);
      history.push('/channels');
    };
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      await getAccessToken(authorizationCode);
    }
  }, []);
  return (
    <>
      <TopLogo />
      <div className="wrap-login">
        <h1 className="logo mobile">
          <img className="img-logo" src={Logo} alt="Hotair" />
        </h1>
        <h2 className="welcome semi-title">Welcome!</h2>
        <section className="login big-round">
          <CommonLogin setupSocket={props.setupSocket} />
          <SocialLogin />
        </section>
        <GuestLogin setupSocket={props.setupSocket} />
      </div>
    </>
  );
}
export default withRouter(Login);
