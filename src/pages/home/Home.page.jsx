import React, {useContext, useEffect, useState} from 'react';
import {signOut} from "firebase/auth";
import {auth} from "../../firebase.js";
import {useSelector} from "react-redux";
import {json} from "react-router-dom";


function HomePage() {
  const userStore = useSelector(state => state.user);
  const [email, setEmail] = useState();

  useEffect(() => {
    const userObject = JSON.parse(userStore.user);
    setEmail(userObject.email);
  }, []);


  const logOut = () => {
    signOut(auth)
      .then('Logged out')
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div id='home-page'>
      <h1>Home page</h1>
      <h2>{email}</h2>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default HomePage;
