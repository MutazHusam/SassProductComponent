import React from "react";
import "./style.css";
const Img2 = require("../../assets/pin.png");
const Img3 = require("../../assets/icon.png");

interface MyComponentProps {
  title: string;
  companyName: string;
  companyUrl: string;
  companyLocation: string;
  workOfType: string;
  Applied: number;
  Recommended: number;
  Shortlisted: number;
  Offer: number;
  Hired: number;
  logo: any;
}

const Application: React.FC<MyComponentProps> = ({
  title,
  companyName,
  companyUrl,
  companyLocation,
  workOfType,
  Applied,
  Recommended,
  Shortlisted,
  Offer,
  Hired,
  logo,
}) => {
  return (
    <div className="mainContainer">
      <div className="card">
        <div className="logoWrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="departmentInfo">
          <span className="title">{title}</span>
          <a
            className="companyName"
            href={companyUrl}
            target={"_blank"}
            rel="noreferrer"
          >
            {companyName}
          </a>
          <div className="locationInfo">
            <div className="location">
              <div className="iconWrapper">
                <img src={Img2} alt="icon" />
              </div>
              <span>{companyLocation}</span>
            </div>
            <div className="typeOfWork">
              <div className="iconWrapper">
                <img src={Img3} alt="icon" />
              </div>
              <span>
                <span>Type of work</span> {workOfType}
              </span>
            </div>
          </div>
        </div>
        <div className="numericData">
          <div>
            <span>{Applied}</span>
            <span>Applied</span>
          </div>

          <div>
            <span>{Recommended}</span>
            <span>Recommended</span>
          </div>

          <div>
            <span>{Shortlisted}</span>
            <span>Shortlisted</span>
          </div>

          <div>
            <span>{Offer}</span>
            <span>Offer</span>
          </div>

          <div>
            <span>{Hired}</span>
            <span>Hired</span>
          </div>
        </div>
      </div>
      <span>Close application</span>
    </div>
  );
};

export default Application;
