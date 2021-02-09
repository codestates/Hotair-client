import React from 'react';
import { Link } from 'react-router-dom';

export default function GuestLogin() {
  return (
    <div className="wrap-guest">
      <Link to="/guests/login" className="guest-login semi-title">
        Guest Login
      </Link>
    </div>
  );
}
