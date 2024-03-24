import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../Components/TechStack/TechStack";
import { SkillsSectionConst } from "../../Utils/Constants";
import { Fade } from "react-reveal";

export default function Skills() {
  if (!SkillsSectionConst.display) {
    return null;
  }
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{SkillsSectionConst.title}</h1>
            <p className="subTitle skills-text-subtitle">{SkillsSectionConst.subTitle}</p>
            <SoftwareSkill />
            <div>
              {Array.isArray(SkillsSectionConst.skills) &&
                SkillsSectionConst.skills.map((skills, i) => {
                  return (
                    <p key={i} className="subTitle skills-text">
                      {skills}
                    </p>
                  );
                })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
