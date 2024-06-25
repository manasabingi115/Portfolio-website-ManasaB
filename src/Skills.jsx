function Skills() {
  const skillsData = [
    {
      s_logo: "%PUBLIC_URL%/assets/html.png",
      s_name: "HTML",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/css.jpg",
      s_name: "CSS",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/javascript.jpg",
      s_name: "JavaScript",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/react.png",
      s_name: "React",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/router.png",
      s_name: "Router",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/redux.jpg",
      s_name: "Redux",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/jquery.png",
      s_name: "jQuery",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/typescript.jpg",
      s_name: "typeScript",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/restapi.png",
      s_name: "REST Api",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/graphql.png",
      s_name: "GraphQl",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/bootstrap.jpg",
      s_name: "Bootstrap",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/nodejs.png",
      s_name: "Node.js",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/freemarker.png",
      s_name: "freemarker",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/vscode.jpg",
      s_name: "VSCode",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/git.png",
      s_name: "Git",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/npm.png",
      s_name: "NPM",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/vite.jpg",
      s_name: "Vite JS",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/github.png",
      s_name: "Git Hub",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/postman.png",
      s_name: "Postman",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/fluentUI.png",
      s_name: "fluent UI (8,9)",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/jest.png",
      s_name: "Jest",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/vitest.jpg",
      s_name: "Vitest",
    },
    {
      s_logo: "%PUBLIC_URL%/assets/emailjs.jpg",
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
