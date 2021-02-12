import React from 'react';
export default function SocialLogin() {
  const GITHUB_LOGIN_URL =
    'https://github.com/login/oauth/authorize?client_id=e23de69d9d6f6c236c19';
  const socialLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };
  return (
    <div className="social-login">
      <button className="kakao-btn" type="button">
        <span className="btn-active">Login with kakao</span>
      </button>
      <button className="google-btn" type="button">
        <span className="btn-active">Login with google</span>
      </button>
      <button className="github-btn" type="button" onClick={socialLoginHandler}>
        <span className="btn-active">Login with github</span>
      </button>
    </div>
  );
}
