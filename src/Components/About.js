import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var secA = data.secA;
    var secB = data.SecB;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Mayank's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">

          <p>{bio}</p>
          <div className="row">
            <div className="columns download">
              <p>
                <a href={secA} download className="button">
                  <i className="fa fa-download"></i>Section A
                </a>
                <a href={secB} download className="button">
                  <i className="fa fa-download"></i>Section B
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
