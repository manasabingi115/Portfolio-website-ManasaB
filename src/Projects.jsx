import React from "react";
import projectsData from "./projectsData/ProjectsData";

function Projects() {
  const [filteredValue, setFilteredValue] = React.useState("all");
  const [filteredData, setFilteredData] = React.useState(projectsData);

  const filterData = [
    { name: "ALL", id: "all" },
    { name: "POPULAR", id: "popular" },
    { name: "LATEST", id: "latest" },
    { name: "UPCOMING", id: "upcoming" },
  ];

  function filterProjects(filter) {
    const filteredProjectData = projectsData.filter((project) =>
      project.filterBy.includes(filter)
    );
    filter == "all"
      ? setFilteredData(projectsData)
      : setFilteredData(filteredProjectData);
  }

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
              onClick={() => {
                setFilteredValue(data.id);
                filterProjects(data.id);
              }}
              tabIndex={0}
            >
              {data.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="filters_content">
        {filteredData.length > 0 ? (
          filteredData.map((data, index) => (
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
                  <a
                    href={data.githubRepo}
                    target="_blank"
                    className="primary_btn card-btn"
                  >
                    Git Repo
                  </a>
                  <a
                    href={data.liveAt}
                    target="_blank"
                    className="primary_btn card-btn"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 style={{ color: "#5d5c5c" }}>
            There are no {filteredValue} projects!
          </h3>
        )}
      </div>
    </div>
  );
}

export default Projects;
