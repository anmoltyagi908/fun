import React from "react";
import TypeWriter from "react-typewriter";
import  { useEffect, useState } from 'react'
import "./Home.css"
// import Image from "next/image";
// import { useRouter } from "next/dist/client/router";


// import firebase ,{auth} from './config/firebase-config'

import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import { Link } from 'react-router-dom';
import firebase, { auth } from "./config/firebase-config";


function Home(){
  function playVideo(file) {
    setFileName(file);
  }
  const [fileName, setFileName] = useState('https://www.youtube.com/embed/wiuLCUZAWy8');
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
                

        <div className="banner-text">
        <Link to="/">
        <div className="loginscreen_logo">
           <img
            src=" https://mitmeerut.ac.in/assets/frontend/images/mit_shell_new.png"
            />
        </div>
        </Link>

       {/* <Router> */}
 {!isUserSignedIn ? (
          <button className="signout" onClick={signInWithFirebase}>Sign In</button>
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
    <section id="about" style={{textAlign:"center"}}>
          <h2>Courses</h2>
      <div className="row rowpos" style={{textAlign:"center"}}>
        
          <div class="container">
    <input type="radio" name="dot" id="one"/>
    <input type="radio" name="dot" id="two"/>
    <div class="main-card">
      <div class="cards">
        <div class="card">
        <Link to='btech'>
         <div class="content">
           <div class="img">
          <img src="https://www.galaxyeduworld.com/storage/course/1616842296_605f0e38afa50_750_351.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">B.Tech</div>
           </div>
         </div>
        </Link>
        </div>
        <div class="card">
        <Link to='pharm'>
         <div class="content">
           <div class="img">
           <img src="https://aosts.com/wp-content/uploads/2019/03/Independent-Water-analysis.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">B.Pharm & D.Pharm</div>
           </div>
         </div>
         </Link>
        </div>
        <div class="card">
        <Link to='bcom'>
         <div class="content">
           <div class="img">
             <img src="https://img.freepik.com/free-photo/calculator-100-dollar-bills-saving-concept_359031-11620.jpg?size=626&ext=jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">B.Com</div>
           </div>
         </div>
        </Link>
        </div>
      </div>
      <div class="cards">
        <div class="card">
        <Link to='bba'>
         <div class="content">
           <div class="img">
             <img src="https://www.indifi.com/blog/wp-content/uploads/2020/11/business-plan.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">BBA</div>
           </div>
         </div>
         </Link>
        </div>
        <div class="card">
        <Link to='bca'>
         <div class="content">
           <div class="img">
             <img src="https://campushunt.in/blog/wp-content/uploads/2018/04/laptop-screen-with-code-best-bca-colleges-in-bangalore-india-1024x536.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">BCA</div>
           </div>
         </div>
         </Link>
        </div>
        <div class="card">
        <Link to='bsc'>
         <div class="content">
           <div class="img">
             <img src="https://www.tawicolleges.com/wp-content/uploads/2019/05/agricultural-science.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">BSC</div>
           </div>
         </div>
         </Link>
        </div>
      </div>
    </div>
    <div class="button" style={{background:'#e3343a'}}>
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div>
      </div>
    </section>
    <section id="resume">
      <div className="row">
        <iframe src="https://mitmeerut.ac.in/" height="500" width="100%" title="Iframe Example"></iframe>
      </div>
    </section>

    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Videos</h1>

          <div className="videorow">
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/vi/9i0FZJpby7M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7jJPB5GI-MyJ8u5U6F0Yh1OAqLg" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/9i0FZJpby7M')} />
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/an_webp/wiuLCUZAWy8/mqdefault_6s.webp?du=3000&sqp=CJfsgIwG&rs=AOn4CLALE3T-aUROyaXfCHdLr-427_6Fng" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/wiuLCUZAWy8')}/>
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/vi/q62SvxH2Vuk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGtJQlwbMdV2aI_LTYEzy96xrNGQ" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/q62SvxH2Vuk')}/>
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/an_webp/haO2Lp4AGNk/mqdefault_6s.webp?du=3000&sqp=CKbUgIwG&rs=AOn4CLAEe0Y5Et4CF6rVhx33X_vf04e9WA" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/haO2Lp4AGNk')} />
                </div>
            </div>
          </div>
          <div className="videorow">
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/vi/g1iPYSGqHiI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2ofgs-m4KXOx_JpXhTaYmLsHpug" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/g1iPYSGqHiI')} />
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/vi/5F33ceKXXPA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsC_n8FoQ7kxCBvf5lv2xoGpvyEQ" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/5F33ceKXXPA')}/>
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/an_webp/gWuDIsnwTkg/mqdefault_6s.webp?du=3000&sqp=CMD1gIwG&rs=AOn4CLCaRFlYXp2BUCwvkpC4QLIESTlg4A" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/gWuDIsnwTkg')}/>
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/an_webp/gJ-gS2EHwts/mqdefault_6s.webp?du=3000&sqp=CLbpgIwG&rs=AOn4CLAOaIURybggpptJxEmDvZNbUKVC4g" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/gJ-gS2EHwts')}/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-player">
      <iframe width="70%" height="550" src={fileName} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </section>

    <footer>
      <div className="row">
        <div className="twelve columns">

          <ul className="copyright">
            <li>
              Directed by {" "}
              <p>
                <a href="https://resume-alpha-ashen.vercel.app/">
                  Mr. Alok Chauchan Sir
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
