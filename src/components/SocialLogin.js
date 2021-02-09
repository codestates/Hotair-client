import React from 'react';

export default function SocialLogin() {
  return (
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
  );
}
