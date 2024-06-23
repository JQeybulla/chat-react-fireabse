import React, {useState} from 'react';
import './Login.page.scss';
import loginImage from './../../assets/login.svg';
import usernameImage from './../../assets/username.svg';
import passwordImage from './../../assets/password.svg';
import googleImage from './../../assets/google 1.svg';
import facebookImage from './../../assets/facebook 1.svg';
import {auth} from "../../firebase.js";
import {useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import {login} from "../../core/store/user/userSlice.js";

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        localStorage.setItem('user', JSON.stringify(userCredential.user));
        dispatch(login(JSON.stringify(userCredential.user)));
        navigate('/home');
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message);
      })
  }

  return (
    <div id='login'>
      <div className="left">
        <form>
          <div className="form-header">
            <h1>Welcome</h1>
            <p>We are glad to see you back with us</p>
          </div>

          <img src={usernameImage} alt='username-icon' className='username-icon' />
          <input type="text" placeholder='Username' onChange={onEmailChange}/>

          <img src={passwordImage} alt='password-icon' className='password-icon' />
          <input type="password" placeholder='Password' onChange={onPasswordChange}/>

          <button onClick={handleSubmit}>Next</button>

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
