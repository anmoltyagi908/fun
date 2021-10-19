import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact"
import Portfolio from "./Components/Portfolio";

import "./Semiii.css";

const Bpharm4 = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeDataBpharm4.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

    return (
        <div className="home">
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Portfolio data={resumeData.portfolio} />
            <Contact data={resumeData.main} />
            <Footer data={resumeData.main} />
        </div>
    );
};

export default Bpharm4;
