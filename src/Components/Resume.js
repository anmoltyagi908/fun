import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var syllabuss = data.syllabus.map(function (subject) {
      return (
        <div key={subject.subjects} >
          <a href={subject.link} download>
          <p>{subject.subjects}</p></a>
          <hr></hr>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      return (
        <div key={skills.subjects} >
          <a href={skills.link} download>
          <p>{skills.subjects}</p></a>
          <hr></hr>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Syllabus</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{syllabuss}</div>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
            <h1>
              <span >Lab Syllabus</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{skills}</div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Resume;
