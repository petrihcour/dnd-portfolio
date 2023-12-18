import React from "react";
import "../styles/Skills.css";

function Skills() {
  const dottedUnderlineStyle = {
    textDecoration: "underline dotted",
    textUnderlineOffset: "0.2em",
  };

  const skillsData = [
    { proficiency: "1", type: "Frontend", skill: "HTML5", bonus: "@mdo" },
    { proficiency: "2", type: "Frontend", skill: "JavaScript", bonus: "@fat" },
    { proficiency: "2", type: "Frontend", skill: "React", bonus: "@fat" },
    { proficiency: "2", type: "Frontend", skill: "CSS", bonus: "@fat" },
    { proficiency: "2", type: "Frontend", skill: "Bootstrap", bonus: "@fat" },
    { proficiency: "2", type: "Backend", skill: "Node Js", bonus: "@fat" },
    { proficiency: "2", type: "Backend", skill: "Express Js", bonus: "@fat" },
    { proficiency: "2", type: "Backend", skill: "PostgreSQL", bonus: "@fat" },
    { proficiency: "2", type: "Backend", skill: "Express Js", bonus: "@fat" },
    { proficiency: "2", type: "Personal", skill: "Project Management", bonus: "@fat" },
    { proficiency: "2", type: "Personal", skill: "Cross-Functional Collaborations", bonus: "@fat" },
    { proficiency: "2", type: "Personal", skill: "Root Cause Problem Solving", bonus: "@fat" },
  ];


  return (
    <div className="p-3">
      <h2 className="text-center p-3">SKILLS</h2>

      <div className="card mx-auto bg-transparent" style={{ maxWidth: "650px" }}>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="bg-transparent">
                  <abbr
                    style={dottedUnderlineStyle}
                    title="PROFICIENCY IS MARKED BY THE FILLED IN RADIO BUTTON"
                  >
                    PROF
                  </abbr>
                </th>
                <th scope="col" className="bg-transparent">TYPE</th>
                <th scope="col" className="bg-transparent">SKILL</th>
                <th scope="col" className="bg-transparent">
                  <abbr
                    style={dottedUnderlineStyle}
                    title="PROFICIENCY BONUS IN D&D MEASURES SKILL PROFICIENCY. THE MAX IS 11 ON MY CHARACTER SHEET"
                  >
                    BONUS
                  </abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {skillsData.map((skill, index) => (
                <tr key={index}>
                  <th scope="row" className="bg-transparent">{skill.proficiency}</th>
                  <td className="bg-transparent">{skill.type}</td>
                  <td className="bg-transparent">{skill.skill}</td>
                  <td className="bg-transparent">{skill.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
