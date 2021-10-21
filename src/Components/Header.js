import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import  { useEffect, useState } from 'react'
import firebase, { auth } from "../config/firebase-config";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var description = data.description;
    var city = data.address.city;
    var header = data.header;
    var headerImage = data.headerImage;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }
  
  
  // function Btechcivil(){
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
    <header id="home" style={{background: `#161415 url(${headerImage}) no-repeat top center`}}>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <Link to={header}>
          <li>
            <p style={{color:"white"}}>
              Home
            </p>
          </li>
          </Link>
            <li>
            <a className="smoothscroll" href="#about">
              TimeTable
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Syllabus
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Note's
            </a>
          </li>
          
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
     
      <div className="row banner">
        <div className="banner-text">
        <div className="loginscreen_logo">
        <Link to="/">

           <img
            src=" https://mitmeerut.ac.in/assets/frontend/images/mit_shell_new.png"
            />
                    </Link>

        </div>
        {!isUserSignedIn ? (
          <button className="signoutt" onClick={signInWithFirebase}>sign In</button>
          ):(
            <button className="signoutt" onClick={signOutt}>sign out</button>

          )}            <h2 className="responsive-headline" >
            <TypeWriter typing={0.5}>{name ? `${name}.` : null}</TypeWriter>
          </h2>
          <h3>
            Based in {city} {description}
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
