import React,{useState} from "react";
import { auth } from "../config/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Portfolio = ({ data }) => {
    const [isUserSignedIn, setUserSignedIn] = useState(false)
    auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          console.log(true)
          return setUserSignedIn(true)
        }
        console.log(false)
        setUserSignedIn(false)
    });
    const alertt = (e) => {
      console.log('button')
      alert("Please!! Sign In for Reading or Download")
    }
    const checkn = (e)=> {
      console.log('notes')
    }

  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            {!isUserSignedIn ? (

              <div  onClick={()=>alertt()}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5> 
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
              </div>
            ):(
              <a href={projects.url} title={projects.title} onClick={()=>checkn()} download>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5> 
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
            )}
          </div>
        </div>
      );
    });
  };

    

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Quantums</h1>
       
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
