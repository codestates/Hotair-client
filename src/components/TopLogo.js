import React from 'react';
import Logo from '../assets/img/logo.svg';
import { ReactComponent as AirBallon } from '../assets/img/bg-balloon.svg';

export default function TopLogo() {
  return (
    <>
      <h1 className="logo pc">
        <img className="img-logo" src={Logo} alt="Hotair" />
      </h1>
      <AirBallon className="bg-airBalloon" alt="hot air ballon" />
    </>
  );
}
