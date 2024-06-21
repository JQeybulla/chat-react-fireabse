import React from 'react';
import './Login.page.scss';
import loginImage from './../../assets/login.svg';
import usernameImage from './../../assets/username.svg';
import passwordImage from './../../assets/password.svg';
import googleImage from './../../assets/google 1.svg';
import facebookImage from './../../assets/facebook 1.svg';

function LoginPage() {
  return (
    <div id='login'>
      <div className="left">
        <form>
          <div className="form-header">
            <h1>Welcome</h1>
            <p>We are glad to see you back with us</p>
          </div>

          <img src={usernameImage} alt='username-icon' className='username-icon' />
          <input type="text" placeholder='Username'/>

          <img src={passwordImage} alt='password-icon' className='password-icon' />
          <input type="password" placeholder='Password'/>

          <button>Next</button>
          <p style={{textAlign: 'center'}}>Login with Others</p>
          <div className="google">
            <img src={googleImage} alt="google-image"/>
            <p>Login with <span>Google</span></p>
          </div>
          <div className="facebook">
            <img src={facebookImage} alt="facebook-image"/>
            <p>Login with <span>Facebook</span></p>
          </div>
        </form>
      </div>
      <div className="right">
        <img src={loginImage} alt="login-image"/>
      </div>
    </div>
  );
}

export default LoginPage;
