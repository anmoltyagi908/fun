
import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer";

import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import  { useEffect, useState } from 'react'

import firebase, { auth } from "./config/firebase-config";
function Bsc(){
  const [isUserSignedIn,setUserSignedIn] = useState(false)
  auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          return setUserSignedIn(true)
        }
        setUserSignedIn(false)
      });
  const signOutt = (e)=>{
    e.preventDefault();
    auth.signOut();
  }

  const signInWithFirebase = (e) => {
    e.preventDefault();
    var provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    alert('Congratulations!! ' + user.displayName +' is Signed In.');

// ...
    }).catch((error) => {
        console.log(error)
    });
  }
  return (
    <div>
    <header id="home" style={{backgroundImage:'url(https://www.tawicolleges.com/wp-content/uploads/2019/05/agricultural-science.jpg'}}>
      <div className="row banner">
        <div className="banner-text">
        <Link to="/">
        <div className="loginscreen_logo">
           <img
            src=" https://mitmeerut.ac.in/assets/frontend/images/mit_shell_new.png"
            />
        </div>
        </Link>
        {!isUserSignedIn ? (
          <button className="signout" onClick={signInWithFirebase}>sign In</button>
          ):(
            <button className="signout" onClick={signOutt}>sign out</button>

          )}
          <button className="signout" onClick={signOutt}>sign out</button>
          <h2 className="responsive-headline" >
            <TypeWriter typing={0.5}>Bachelor of Science</TypeWriter>
          </h2>
          <hr />
          <ul className="social">
            <li key="facebook">
            <a href='https://www.facebook.com/mit.merrut/'>
              <i className="fa fa-facebook"></i>
            </a>
            </li>
            <li key="instagram">
            <a href='https://www.instagram.com/mit_meerut/'>
              <i className="fa fa-instagram"></i>
            </a>
            </li>
            <li key="linkedin">
            <a href="https://www.linkedin.com/company/mitmeerut/">
              <i className="fa fa-linkedin"></i>
            </a>
            </li>
          </ul>
        </div>
      </div>
     
    </header>
    <section id="about">
      <div className="row" style={{textAlign:"center"}}>
          <h2>Semesters</h2>
          <div className="row">
            <div className="columns download" style={{width:"100%"}}>
              <p>
                <Link to="/bsc1" className="button">
                  <i className="fa fa-download"></i>1 Semester
                </Link>
                <Link to="/bsc2" className="button">
                  <i className="fa fa-download"></i>2 Semester
                </Link>
                <Link to="/bsc3" className="button">
                  <i className="fa fa-download"></i>3 Semester
                </Link>
                <Link to="/bsc4" className="button">
                  <i className="fa fa-download"></i>4 Semester
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="columns download" style={{width:"100%"}}>
              <p>
                <Link to="/bsc5" className="button">
                  <i className="fa fa-download"></i>5 Semester
                </Link>
                <Link to="/bsc6" className="button">
                  <i className="fa fa-download"></i>6 Semester
                </Link>
                <Link to="/bsc7" className="button">
                  <i className="fa fa-download"></i>7 Semester
                </Link>
                <Link to="/bsc8" className="button">
                  <i className="fa fa-download"></i>8 Semester
                </Link>
              </p>
            </div>
          </div>
      </div>
    </section>
    <footer>
      <div className="row">
        <div className="twelve columns">

          <ul className="copyright">
            <li>
              Made by{" "}
              <p>
                <a href="https://resume-alpha-ashen.vercel.app/">
                  MAYANK TYAGI
                </a>
                |
                <a href="https://resume-476e4.web.app/">
                  ANMOL TYAGI
                </a>
              </p>
            </li>
          </ul>
        </div>
       
      </div>
    </footer>
  </div>
  );
};

export default Bsc;