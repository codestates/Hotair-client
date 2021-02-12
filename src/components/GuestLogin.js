import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function GuestLogin(props) {
  const history = useHistory();
  const guestLogin = () => {
    axios.post('http://localhost:4000/users/guestLogin').then((data) => {
      localStorage.setItem('CC_Token', data.data.token);
      props.setupSocket();
      history.push('/channels');
    });
  };
  return (
    <div className="wrap-guest">
      <div onClick={guestLogin} className="guest-login semi-title">
        Guest Login
      </div>
    </div>
  );
}
