function Skills() {
  const skillsData = [
    {
      s_logo: "/assets/skills/html.png",
      s_name: "HTML5",
    },
    {
      s_logo: "/assets/skills/css.jpg",
      s_name: "CSS3",
    },
    {
      s_logo: "/assets/skills/SCSS.png",
      s_name: "SCSS",
    },
    {
      s_logo: "/assets/skills/javascript.jpg",
      s_name: "JavaScript",
    },
    {
      s_logo: "/assets/skills/typescript.jpg",
      s_name: "TypeScript",
    },
    {
      s_logo: "/assets/skills/react.png",
      s_name: "React.js",
    },
    {
      s_logo: "/assets/skills/nextjs.jpeg",
      s_name: "Next.js",
    },
    {
      s_logo: "/assets/skills/redux.jpg",
      s_name: "Redux",
    },
    {
      s_logo: "/assets/skills/graphql.png",
      s_name: "GraphQL",
    },
    {
      s_logo: "/assets/skills/Webpack.png",
      s_name: "Webpack",
    },
    {
      s_logo: "/assets/skills/AzureDevops.png",
      s_name: "Azure DevOps",
    },
    {
      s_logo: "/assets/skills/MicroFrontends.png",
      s_name: "Micro Frontends",
    },
    {
      s_logo: "/assets/skills/ContextApi.png",
      s_name: "Context API",
    },
    {
      s_logo: "/assets/skills/ReactQuery.png",
      s_name: "React Query",
    },
    {
      s_logo: "/assets/skills/accessibility.jpg",
      s_name: "Accessibility",
    },
    {
      s_logo: "/assets/skills/PerformanceOptimise.png",
      s_name: "Performance",
    },
    {
      s_logo: "/assets/skills/CrossBrowserCompatibility.png",
      s_name: "Cross Browser Compatibility",
    },
    {
      s_logo: "/assets/skills/Agile.png",
      s_name: "Agile Methodologies",
    },
    {
      s_logo: "/assets/skills/JWT-WebToken.png",
      s_name: "JWT Web Token",
    },
    {
      s_logo: "/assets/skills/browserDevTools.jpg",
      s_name: "Browser Dev Tools",
    },
    {
      s_logo: "/assets/skills/lighthouse.png",
      s_name: "Lighthouse",
    },
    {
      s_logo: "/assets/skills/Figma.png",
      s_name: "Figma",
    },
    {
      s_logo: "/assets/skills/router.png",
      s_name: "Router",
    },
    {
      s_logo: "/assets/skills/jquery.png",
      s_name: "JQuery",
    },
    {
      s_logo: "/assets/skills/restapi.png",
      s_name: "REST Api",
    },
    {
      s_logo: "/assets/skills/bootstrap.jpg",
      s_name: "Bootstrap",
    },
    {
      s_logo: "/assets/skills/Axios.png",
      s_name: "Axios",
    },
    {
      s_logo: "/assets/skills/nodejs.png",
      s_name: "Node.js",
    },
    {
      s_logo: "/assets/skills/SQL.png",
      s_name: "SQL",
    },
    {
      s_logo: "/assets/skills/babel.png",
      s_name: "Babel",
    },
    {
      s_logo: "/assets/skills/Jira.png",
      s_name: "Jira",
    },
    {
      s_logo: "/assets/skills/freemarker.png",
      s_name: "Freemarker",
    },
    {
      s_logo: "/assets/skills/git.png",
      s_name: "Git",
    },
    {
      s_logo: "/assets/skills/githubActions.png",
      s_name: "GitHub Actions",
    },
    {
      s_logo: "/assets/skills/github.png",
      s_name: "Git Hub",
    },
    {
      s_logo: "/assets/skills/postman.png",
      s_name: "Postman",
    },
    {
      s_logo: "/assets/skills/fluentUI.png",
      s_name: "fluent UI (8,9)",
    },
    {
      s_logo: "/assets/skills/jest.png", //here....
      s_name: "Jest",
    },
    {
      s_logo: "/assets/skills/vitest.jpg",
      s_name: "Vitest",
    },
    {
      s_logo: "/assets/skills/emailjs.jpg",
      s_name: "EmailJS",
    },
    {
      s_logo: "/assets/skills/vscode.jpg",
      s_name: "VSCode",
    },

    {
      s_logo: "/assets/skills/npm.png",
      s_name: "NPM",
    },
    {
      s_logo: "/assets/skills/vite.jpg",
      s_name: "Vite JS",
    },
    {
      s_logo: "/assets/skills/gitlab.png",
      s_name: "Git Lab",
    },
    {
      s_logo: "/assets/skills/bitBucket.jpg",
      s_name: "Bit Bucket",
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
