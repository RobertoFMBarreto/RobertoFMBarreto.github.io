import React from "react";
//import CV from "../../assets/cv.pdf";
const HeaderButtons = () => {
  return (
    <div className="header-buttons">
      {/* <a href={CV} download className="btn">
        Download CV
      </a> */}
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default HeaderButtons;
