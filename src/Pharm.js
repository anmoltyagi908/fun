import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import  { useEffect, useState } from 'react'

import firebase, { auth } from "./config/firebase-config";


function Pharm(){
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

    // console.log(user);
    setUserName(user.displayName);

// ...
    }).catch((error) => {
        console.log(error)
    });
}
  return (
    <div>
    <header id="home" style={{backgroundImage:'url(https://aosts.com/wp-content/uploads/2019/03/Independent-Water-analysis.jpg)'}}>
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
            <button className="signout" onClick={signOutt}>Sign Out <p>{userName}</p> </button>

          )}            <h2 className="responsive-headline" >
            <TypeWriter typing={0.5}>B.Pharm & D.Pharm</TypeWriter>
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
    <section id="about" style={{textAlign:"center"}}>
          <h2>Branch</h2>
          <div className="row rowpos">
          <div class="container">
    <input type="radio" name="dot" id="one"/>
    <div class="main-card">
      <div class="cards" style={{justifyContent:'space-around'}}>
        <div class="card">
        <Link to='bpharm'>
         <div class="content">
           <div class="img">
          <img src="https://institute.careerguide.com/wp-content/uploads/2020/04/Pharmaceutical.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">B.Pharm</div>
           </div>
         </div>
        </Link>
        </div>
        <div class="card">
        <Link to='dpharm'>
         <div class="content">
           <div class="img">
           <img src="https://eduly.in/wp-content/uploads/2019/06/antibiotic-capsules-close-up-139398-compressed.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">D.Pharm</div>
           </div>
         </div>
         </Link>
        </div>
      </div>
      <div class="cards">
        
      </div>
    </div>
    <div class="button" style={{background:'#e3343a'}}>
      <label for="one" class=" active one"></label>
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

export default Pharm;
