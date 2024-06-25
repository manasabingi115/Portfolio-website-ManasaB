function Skills() {
  const skillsData = [
    {
      s_logo: "/assets/html.png",
      s_name: "HTML",
    },
    {
      s_logo: "/assets/css.jpg",
      s_name: "CSS",
    },
    {
      s_logo: "/assets/javascript.jpg",
      s_name: "JavaScript",
    },
    {
      s_logo: "/assets/react.png",
      s_name: "React",
    },
    {
      s_logo: "/assets/router.png",
      s_name: "Router",
    },
    {
      s_logo: "/assets/redux.jpg",
      s_name: "Redux",
    },
    {
      s_logo: "/assets/jquery.png",
      s_name: "jQuery",
    },
    {
      s_logo: "/assets/typescript.jpg",
      s_name: "typeScript",
    },
    {
      s_logo: "/assets/restapi.png",
      s_name: "REST Api",
    },
    {
      s_logo: "/assets/graphql.png",
      s_name: "GraphQl",
    },
    {
      s_logo: "/assets/bootstrap.jpg",
      s_name: "Bootstrap",
    },
    {
      s_logo: "/assets/nodejs.png",
      s_name: "Node.js",
    },
    {
      s_logo: "/assets/freemarker.png",
      s_name: "freemarker",
    },
    {
      s_logo: "/assets/vscode.jpg",
      s_name: "VSCode",
    },
    {
      s_logo: "/assets/git.png",
      s_name: "Git",
    },
    {
      s_logo: "/assets/npm.png",
      s_name: "NPM",
    },
    {
      s_logo: "/assets/vite.jpg",
      s_name: "Vite JS",
    },
    {
      s_logo: "/assets/github.png",
      s_name: "Git Hub",
    },
    {
      s_logo: "/assets/postman.png",
      s_name: "Postman",
    },
    {
      s_logo: "/assets/fluentUI.png",
      s_name: "fluent UI (8,9)",
    },
    {
      s_logo: "/assets/jest.png",
      s_name: "Jest",
    },
    {
      s_logo: "/assets/vitest.jpg",
      s_name: "Vitest",
    },
    {
      s_logo: "/assets/emailjs.jpg",
      s_name: "EmailJS",
    },
  ];
  return (
    <div id="skills" className="skills">
      {/* <h2>Skills</h2> */}
      {skillsData.map((data, index) => (
        <div className="skills_container" key={index}>
          <div>
            <img
              className="logo"
              src={data.s_logo}
              alt="skill-logo"
              height={100}
              width={100}
            />
          </div>
          <div className="skill_name">
            <p>{data.s_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
