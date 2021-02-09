import React from 'react';
import Logo from '../assets/img/logo.svg';

import { ReactComponent as AirBallon } from '../assets/img/bg-balloon.svg';

export default function Login() {
  return (
    <>
      <h1 className="logo pc">
        <img className="img-logo" src={Logo} alt="Hotair" />
      </h1>
      <AirBallon className="bg-airBalloon" alt="hot air ballon" />
      <div className="wrap-join">
        <h2 className="semi-title join-us">join us !</h2>
        <section className="join big-round">
          <form action="#" className="table-join" method="post">
            <label htmlFor="inputJoinEmail">email</label>
            <input id="inputJoinEmail" type="text" />
            <label htmlFor="inputJoinName">name</label>
            <input id="inputJoinName" type="text" />
            <label htmlFor="inputJoinPassword">password</label>
            <input id="inputJoinPassword" type="text" />
            <label htmlFor="inputJoinPasswordAgain">password again</label>
            <input id="inputJoinPasswordAgain" type="text" />
            <label htmlFor="inputJoinPhoneNumber">phone number</label>
            <input id="inputJoinPhoneNumber" type="text" />
            <button className="btn-signUp green" type="button">
              Sign up
            </button>
          </form>
          <a href="#" className="link-login">
            Already have an account?
            <button className="text-green" type="button">
              Click Here!
            </button>
          </a>
        </section>
      </div>
    </>
  );
}
