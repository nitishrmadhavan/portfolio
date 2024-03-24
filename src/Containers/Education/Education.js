import React from "react";
import "./Education.scss";
import EducationCard from "../../Components/EduStack/EduStack";
import {EducationInfoConst} from "../../Utils/Constants";

export default function Education() {
  if (EducationInfoConst.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {EducationInfoConst.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
