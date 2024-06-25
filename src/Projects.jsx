import React from "react";
import projectsData from "./projectsData/ProjectsData";

function Projects() {
  const [filteredValue, setFilteredValue] = React.useState("filter_all");

  const filterData = [
    { name: "ALL", id: "filter_all" },
    { name: "POPULAR", id: "filter_popular" },
    { name: "LATEST", id: "filter_latest" },
    { name: "UPCOMING", id: "filter_upcoming" },
  ];
  return (
    <div className="projects_container" id="projects">
      <h2 className="projects_title">MY PROJECTS</h2>
      <div className="filters portfolio_filter">
        <ul>
          {filterData.map((data) => (
            <li
              className={
                filteredValue === data.id
                  ? "project_tab" + " " + data.id + " " + "active"
                  : "project_tab" + " " + data.id
              }
              key={data.id}
              onClick={() => setFilteredValue(data.id)}
              tabIndex={0}
            >
              {data.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="filters_content">
        {projectsData.map((data, index) => (
          <div className="project_card" key={index} tabIndex={0}>
            <div className="project_image_container">
              <img
                src={data.image}
                height={250}
                width="100%"
                className="project_image"
              />
            </div>
            <div className="project_description">
              <div className="project_details">
                <h3>{data.projectName}</h3>
                <p className="p_description">{data.description}</p>
              </div>
              <div className="card_footer">
                {/* <button className="primary_btn card-btn"> */}
                <a
                  href={data.githubRepo}
                  target="_blank"
                  className="primary_btn card-btn"
                >
                  Git Repo
                </a>
                {/* </button> */}
                {/* <button className="primary_btn card-btn"> */}
                <a
                  href={data.liveAt}
                  target="_blank"
                  className="primary_btn card-btn"
                >
                  Live
                </a>
                {/* </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
