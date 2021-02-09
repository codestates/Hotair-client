import React from 'react';
import { Link } from 'react-router-dom';

import TopLogo from '../components/TopLogo';
import SignupForm from '../components/SignupForm';
export default function Login() {
  return (
    <>
      <TopLogo />
      <div className="wrap-join">
        <h2 className="semi-title join-us">join us !</h2>
        <section className="join big-round">
          <SignupForm />
          <Link to="/" className="link-login">
            Already have an account?
            <button className="text-green" type="button">
              Click Here!
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}
