import React from 'react';
import Logo from '../assets/img/logo.svg';

import { ReactComponent as AirBallon } from '../assets/img/bg-balloon.svg';

export default function Login() {
  return (
    <>
      <h1 className="logo pc disabled">
        {/* <img className="img-logo" src="../assets/img/logo.svg" alt="Hotair" /> */}
        {/* <Logo className="img-logo" alt="Hotair" /> */}
        <img className="img-logo" src={Logo} alt="Hotair" />
      </h1>
      {/* <img
        src="../assets/img/bg-ballon.svg"
        alt="hot air balloon"
        className="bg-airBalloon"
      /> */}
      <AirBallon className="bg-airBalloon" alt="hot air ballon" />
      <div className="wrap-login">
        <h1 className="logo mobile">
          <img className="img-logo" src={Logo} alt="Hotair" />
          {/* <Logo className="img-logo" alt="Hotair" /> */}
        </h1>
        <h2 className="welcome semi-title">Welcome!</h2>

        <section className="login big-round">
          <div className="wrap-common">
            <form action="#" className="table-login" method="post">
              <label htmlFor="inputEmail">Email</label>
              <input id="inputEmail" type="email" />
              <label htmlFor="inputPassword">Password</label>
              <input id="inputPassword" type="password" />
              <button className="btn-login" type="button">
                Login
              </button>
            </form>
            <a href="#" className="link-join">
              Do not have an ID?
              <button className="text-green" type="button">
                Join us
              </button>
            </a>
          </div>

          <div className="social-login">
            <button className="kakao-btn" type="button">
              <span className="btn-active">Login with kakao</span>
            </button>
            <button className="google-btn" type="button">
              <span className="btn-active">Login with google</span>
            </button>
            <button className="github-btn" type="button">
              <span className="btn-active">Login with github</span>
            </button>
          </div>
        </section>

        <div className="wrap-guest">
          <a href="#" className="guest-login semi-title">
            Guest Login
          </a>
        </div>
      </div>
    </>
  );
}
