function Skills() {
  const skillsData = [
    {
      s_logo: "./src/assets/html.png",
      s_name: "HTML",
    },
    {
      s_logo: "./src/assets/css.jpg",
      s_name: "CSS",
    },
    {
      s_logo: "./src/assets/javascript.jpg",
      s_name: "JavaScript",
    },
    {
      s_logo: "./src/assets/react.png",
      s_name: "React",
    },
    {
      s_logo: "./src/assets/router.png",
      s_name: "Router",
    },
    {
      s_logo: "./src/assets/redux.jpg",
      s_name: "Redux",
    },
    {
      s_logo: "./src/assets/jquery.png",
      s_name: "jQuery",
    },
    {
      s_logo: "./src/assets/typescript.jpg",
      s_name: "typeScript",
    },
    {
      s_logo: "./src/assets/restapi.png",
      s_name: "REST Api",
    },
    {
      s_logo: "./src/assets/graphql.png",
      s_name: "GraphQl",
    },
    {
      s_logo: "./src/assets/bootstrap.jpg",
      s_name: "Bootstrap",
    },
    {
      s_logo: "./src/assets/nodejs.png",
      s_name: "Node.js",
    },
    {
      s_logo: "./src/assets/freemarker.png",
      s_name: "freemarker",
    },
    {
      s_logo: "./src/assets/vscode.jpg",
      s_name: "VSCode",
    },
    {
      s_logo: "./src/assets/git.png",
      s_name: "Git",
    },
    {
      s_logo: "./src/assets/npm.png",
      s_name: "NPM",
    },
    {
      s_logo: "./src/assets/vite.jpg",
      s_name: "Vite JS",
    },
    {
      s_logo: "./src/assets/github.png",
      s_name: "Git Hub",
    },
    {
      s_logo: "./src/assets/postman.png",
      s_name: "Postman",
    },
    {
      s_logo: "./src/assets/fluentUI.png",
      s_name: "fluent UI (8,9)",
    },
    {
      s_logo: "./src/assets/jest.png",
      s_name: "Jest",
    },
    {
      s_logo: "./src/assets/vitest.jpg",
      s_name: "Vitest",
    },
    {
      s_logo: "./src/assets/emailjs.jpg",
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
