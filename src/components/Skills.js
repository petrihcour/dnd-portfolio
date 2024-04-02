import React from "react";
import SkillsTemplate from "../skills-data/SkillsTemplate";
import "../styles/Skills.css";


// add dice rolling for bonuses for fun after hitting button

function Skills() {
 

  return (
    <div id="skills" className="container">
      <h2 className="skills-title component-title">SKILLS</h2>
      <SkillsTemplate />
    </div>
  );
}

export default Skills;