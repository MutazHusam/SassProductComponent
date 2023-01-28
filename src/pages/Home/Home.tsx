//HomePage Name For Example
import React from "react";
import Application from "../../components/Application";
import VirtualWorkExperience from "../../components/VirtualWorkExperience";
import "./style.css";
const Img0 = require("../../assets/one.png");
const Img1 = require("../../assets/google.png");

const Home = () => {
  return (
    <div className="mainSection">
      <VirtualWorkExperience
        img={Img0}
        title={"Virtual work experience in London"}
        programmeType={"Internship"}
        durationType={"weeks"}
        durationNum={6}
        date={"13 Jan 2023"}
        candidates={100}
      />
      <Application
        title={"Digital Marketing Intern"}
        companyName={"Google"}
        companyUrl={"https://www.google.ps/"}
        companyLocation={"London, England, United Kingdom"}
        workOfType={"Remote"}
        Applied={5}
        Recommended={5}
        Shortlisted={3}
        Offer={3}
        Hired={2}
        logo={Img1}
      />
      <Application
        title={"Digital Marketing Intern"}
        companyName={"Google"}
        companyUrl={"https://www.google.ps/"}
        companyLocation={"London, England, United Kingdom"}
        workOfType={"Remote"}
        Applied={5}
        Recommended={5}
        Shortlisted={3}
        Offer={3}
        Hired={2}
        logo={Img1}
      />
    </div>
  );
};

export default Home;
