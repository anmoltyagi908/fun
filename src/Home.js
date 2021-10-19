import React from "react";
import TypeWriter from "react-typewriter";
import  { useEffect, useState } from 'react'
import "./Home.css"

// import firebase ,{auth} from './config/firebase-config'

import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import { Link } from 'react-router-dom';
import Footer from "./Components/Footer";
import firebase, { auth } from "./config/firebase-config";


function Home(){
  const [userName, setUserName] = useState('');
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
// const en = auth.result.user.email;
// console.log(en);
  const signInWithFirebase = (e) => {
    e.preventDefault();
    var provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      // const an = result.user.email;
      // console.log(an);
// This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    alert('Congratulations!! ' + user.displayName +' is Signed In.');
// ...
// const  ema = user.displayName;
setUserName(user.displayName);
    }).catch((error) => {
        console.log(error)
    });
   
  
}
  return (
    <div>
    <header id="home" style={{backgroundImage:'url(https://mit-btech-3rd-year.web.app/images/loginscreenimage.jpg)'}}>
      <div className="row banner">
       {/* */}          

        <div className="banner-text">
          <div className="loginscreen_logo">
            <img src=" https://mitmeerut.ac.in/assets/frontend/images/mit_shell_new.png" alt="" />
            </div>


       {/* <Router> */}
 {!isUserSignedIn ? (
          <button className="signout" onClick={signInWithFirebase}>sign In</button>
          ):(
            // <p>{userName}</p>
          
            <button className="signout" onClick={signOutt}>Sign Out</button>

          )}
          {/* <button className="signout" onClick={signOutt}>sign out</button> */}
          <h2 className="responsive-headline" >
            Meerut Institute of Technology
          </h2>
          <h3>
            Based in Meerut.
          </h3>
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
          <h2>Courses</h2>
          <div className="row">
            <div className="columns download" style={{width:"100%"}}>
              <p>
                <Link to="/btech" target="_blank" className="button">
                  <i className="fa fa-download"></i>B.Tech
                </Link>
                <Link to="/pharm" target="_blank"  className="button">
                  <i className="fa fa-download"></i>B.Pharm & D.Pharm
                </Link>
                <Link to="/bcom" target="_blank" className="button">
                  <i className="fa fa-download"></i>B.Com
                </Link>
                <Link to="/bba" target="_blank" className="button">
                  <i className="fa fa-download"></i>BBA
                </Link>
              </p>
            </div>
          </div>
      </div>
    </section>
    <section id="portfolio">
      <div className="row">
        <iframe src="https://mitmeerut.ac.in/" height="500" width="100%" title="Iframe Example"></iframe>
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

export default Home;
