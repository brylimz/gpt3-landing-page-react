import React from "react";
import "./features.css";
const Features = ({title, text}) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
<div />
<h1> {title} </h1>
<div className="gpt3__features-container__feature-text" />
{text}

      </div>
    </div>
  );
};

export default Features;
