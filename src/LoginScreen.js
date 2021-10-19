import firebase from './config/firebase-config';
import React, {useRef} from 'react'
import TypeWriter from "react-typewriter";

import "./LoginScreen.css"
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider } from "firebase/auth";


function LoginScreen() {
   
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
    // ...     
            }).catch((error) => {
                console.log(error)
            });
           
          
        }

    return (
       
        <div className="loginScreen">
        <div className="loginScreen__background">
        <div 
                className="loginScreen__logo">
                    <p><span>M</span>eerut</p>
                    <p><span>I</span>nstitute of</p>
                    <p><span>T</span>echnology</p>
                </div>
            <button  className="loginScreen__button" type = "submit" onClick={signInWithFirebase} >
             <h3>   Sign In with Google </h3>
            </button>
            

            <div className="loginScreen__gradient"></div>

        </div>
       
    </div>
        //   </div> 
    );
}
export default LoginScreen