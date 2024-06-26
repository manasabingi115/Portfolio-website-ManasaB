import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";

function ExperienceSkills() {
  const [tabValue, setTabValue] = React.useState("experience");
  return (
    <div className="tabs_inner" id="work-skills">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" onClick={() => setTabValue("experience")}>
          <a
            className={
              tabValue == "experience" ? "nav-link active" : "nav-link"
            }
            id="home-tab"
            data-toggle="tab"
            // href="#"
          >
            My Experience
          </a>
        </li>
        <li className="nav-item" onClick={() => setTabValue("skills")}>
          <a
            className={tabValue == "skills" ? "nav-link active" : "nav-link"}
            id="profile-tab"
            data-toggle="tab"
            // href="#"
          >
            My Skills
          </a>
        </li>
      </ul>
      <div className="tabs-content">
        {tabValue == "experience" ? <Experience /> : <Skills />}
      </div>
    </div>
  );
}

export default ExperienceSkills;
