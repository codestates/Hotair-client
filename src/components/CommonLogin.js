import React from 'react';
import { Link } from 'react-router-dom';

export default function CommonLogin() {
  return (
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
      <Link to="/users/signup" className="link-join">
        Don&apos;t have an ID?
        <button className="text-green" type="button">
          Join us
        </button>
      </Link>
    </div>
  );
}
