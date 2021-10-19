import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider } from "firebase/auth";

import Home from "./Home";
import Bba from './Bba';
import Bba1 from './Bba1';
import Bba2 from './Bba2';
import Bba3 from './Bba3';
import Bba4 from './Bba4';
import Bba5 from './Bba5';
import Bba6 from './Bba6';
import Bcom6 from './Bcom6';
import Bcom5 from './Bcom5';
import Bcom4 from './Bcom4';
import Bcom3 from './Bcom3';
import Bcom2 from './Bcom2';
import Bcom1 from './Bcom1';
import Bcom from './Bcom';
import Btech from './Btech';
import Btechcs from './Btechcs';
import Btechcs1 from './Btechcs1';
import Btechcs2 from './Btechcs2';
import Btechcs3 from './Btechcs3';
import Btechcs4 from './Btechcs4';
import Btechcs5 from './Btechcs5';
import Btechcs6 from './Btechcs6';
import Btechcs7 from './Btechcs7';
import Btechcs8 from './Btechcs8';
import Btechmec from './Btechmec';
import Btechmec1 from './Btechmec1';
import Btechmec2 from './Btechmec2';
import Btechmec3 from './Btechmec3';
import Btechmec4 from './Btechmec4';
import Btechmec5 from './Btechmec5';
import Btechmec6 from './Btechmec6';
import Btechmec7 from './Btechmec7';
import Btechmec8 from './Btechmec8';
import Btechcivil from './Btechcivil';
import Btechcivil1 from './Btechcivil1';
import Btechcivil2 from './Btechcivil2';
import Btechcivil3 from './Btechcivil3';
import Btechcivil4 from './Btechcivil4';
import Btechcivil5 from './Btechcivil5';
import Btechcivil6 from './Btechcivil6';
import Btechcivil7 from './Btechcivil7';
import Btechcivil8 from './Btechcivil8';
import Pharm from './Pharm';
import Bpharm from './Bpharm';
import Bpharm1 from './Bpharm1';
import Bpharm2 from './Bpharm2';
import Bpharm3 from './Bpharm3';
import Bpharm4 from './Bpharm4';
import Bpharm5 from './Bpharm5';
import Bpharm6 from './Bpharm6';
import Bpharm7 from './Bpharm7';
import Bpharm8 from './Bpharm8';
import Dpharm from './Dpharm';
import Dpharm1 from './Dpharm1';
import Dpharm2 from './Dpharm2';
import Dpharm3 from './Dpharm3';
import Dpharm4 from './Dpharm4';
import LoginScreen from './LoginScreen';
import firebase ,{auth} from './config/firebase-config'
function App() {
  const [isUserSignedIn,setUserSignedIn] = useState(false)
  auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          return setUserSignedIn(true)
        }
        setUserSignedIn(false)
      });

  return (
    <div className="app">
      <Router>
        {/* {isUserSignedIn ? (
          <LoginScreen />
        ):( */}
          <Switch>
          <Route path='/bba'>
            <Bba />
          </Route>
          <Route path='/bba'>
            <Bba />
          </Route>
          <Route path='/bba1'>
            <Bba1 />
          </Route>
          <Route path='/bba2'>
            <Bba2 />
          </Route>
          <Route path='/bba3'>
            <Bba3 />
          </Route>
          <Route path='/bba4'>
            <Bba4 />
          </Route>
          <Route path='/bba5'>
            <Bba5 />
          </Route>
          <Route path='/bba6'>
            <Bba6 />
          </Route>
          <Route path='/bcom'>
            <Bcom />
          </Route>
          <Route path='/bcom1'>
            <Bcom1 />
          </Route>
          <Route path='/bcom2'>
            <Bcom2 />
          </Route>
          <Route path='/bcom3'>
            <Bcom3 />
          </Route>
          <Route path='/bcom4'>
            <Bcom4 />
          </Route>
          <Route path='/bcom5'>
            <Bcom5 />
          </Route>
          <Route path='/bcom6'>
            <Bcom6 />
          </Route>
          <Route path='/btech'>
            <Btech />
          </Route>
          <Route path='/btechcs'>
            <Btechcs />
          </Route>
          <Route path='/btechcs1'>
            <Btechcs1 />
          </Route>
          <Route path='/btechcs2'>
            <Btechcs2 />
          </Route>
          <Route path='/btechcs3'>
            <Btechcs3 />
          </Route>
          <Route path='/btechcs4'>
            <Btechcs4 />
          </Route>
          <Route path='/btechcs5'>
            <Btechcs5 />
          </Route>
          <Route path='/btechcs6'>
            <Btechcs6 />
          </Route>
          <Route path='/btechcs7'>
            <Btechcs7 />
          </Route>
          <Route path='/btechcs8'>
            <Btechcs8 />
          </Route>
          <Route path='/btechmec'>
            <Btechmec />
          </Route>
          <Route path='/btechmec1'>
            <Btechmec1 />
          </Route>
          <Route path='/btechmec2'>
            <Btechmec2 />
          </Route>
          <Route path='/btechmec3'>
            <Btechmec3 />
          </Route>
          <Route path='/btechmec4'>
            <Btechmec4 />
          </Route>
          <Route path='/btechmec5'>
            <Btechmec5 />
          </Route>
          <Route path='/btechmec6'>
            <Btechmec6 />
          </Route>
          <Route path='/btechmec7'>
            <Btechmec7 />
          </Route>
          <Route path='/btechmec8'>
            <Btechmec8 />
          </Route>
          <Route path='/btechcivil'>
            <Btechcivil />
          </Route>
          <Route path='/btechcivil1'>
            <Btechcivil1 />
          </Route>
          <Route path='/btechcivil2'>
            <Btechcivil2 />
          </Route>
          <Route path='/btechcivil3'>
            <Btechcivil3 />
          </Route>
          <Route path='/btechcivil4'>
            <Btechcivil4 />
          </Route>
          <Route path='/btechcivil5'>
            <Btechcivil5 />
          </Route>
          <Route path='/btechcivil6'>
            <Btechcivil6 />
          </Route>
          <Route path='/btechcivil7'>
            <Btechcivil7 />
          </Route>
          <Route path='/btechcivil8'>
            <Btechcivil8 />
          </Route>
          <Route path='/pharm'>
            <Pharm />
          </Route>
          <Route path='/bpharm'>
            <Bpharm />
          </Route>
          <Route path='/bpharm1'>
            <Bpharm1 />
          </Route>
          <Route path='/bpharm2'>
            <Bpharm2 />
          </Route>
          <Route path='/bpharm3'>
            <Bpharm3 />
          </Route>
          <Route path='/bpharm4'>
            <Bpharm4 />
          </Route>
          <Route path='/bpharm5'>
            <Bpharm5 />
          </Route>
          <Route path='/bpharm6'>
            <Bpharm6 />
          </Route>
          <Route path='/bpharm7'>
            <Bpharm7 />
          </Route>
          <Route path='/bpharm8'>
            <Bpharm8 />
          </Route>
          <Route path='/dpharm'>
            <Dpharm />
          </Route>
          <Route path='/dpharm1'>
            <Dpharm1 />
          </Route>
          <Route path='/dpharm2'>
            <Dpharm2 />
          </Route>
          <Route path='/dpharm3'>
            <Dpharm3 />
          </Route>
          <Route path='/dpharm4'>
            <Dpharm4 />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        
        
      </Router>
    </div>
  )
}

export default App
