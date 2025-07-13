function Skills() {
  const skillsData = [
    {
      s_logo: "/assets/html.png",
      s_name: "HTML5",
    },
    {
      s_logo: "/assets/css.jpg",
      s_name: "CSS3",
    },
    {
      s_logo: "/assets/SCSS.png",
      s_name: "SCSS",
    },
    {
      s_logo: "/assets/javascript.jpg",
      s_name: "JavaScript",
    },
    {
      s_logo: "/assets/typescript.jpg",
      s_name: "TypeScript",
    },
    {
      s_logo: "/assets/react.png",
      s_name: "React.js",
    },
    {
      s_logo: "/assets/nextjs.jpeg",
      s_name: "Next.js",
    },
    {
      s_logo: "/assets/redux.jpg",
      s_name: "Redux",
    },
    {
      s_logo: "/assets/graphql.png",
      s_name: "GraphQL",
    },
    {
      s_logo: "/assets/Webpack.png",
      s_name: "Webpack",
    },
    {
      s_logo: "/assets/AzureDevops.png",
      s_name: "Azure DevOps",
    },
    {
      s_logo: "/assets/MicroFrontends.png",
      s_name: "Micro Frontends",
    },
    {
      s_logo: "/assets/ContextApi.png",
      s_name: "Context API",
    },
    {
      s_logo: "/assets/ReactQuery.png",
      s_name: "React Query",
    },
    {
      s_logo: "/assets/accessibility.jpg",
      s_name: "Accessibility",
    },
    {
      s_logo: "/assets/PerformanceOptimise.png",
      s_name: "Performance",
    },
    {
      s_logo: "/assets/CrossBrowserCompatibility.png",
      s_name: "Cross Browser Compatibility",
    },
    {
      s_logo: "/assets/Agile.png",
      s_name: "Agile Methodologies",
    },
    {
      s_logo: "/assets/JWT-WebToken.png",
      s_name: "JWT Web Token",
    },
    {
      s_logo: "/assets/browserDevTools.jpg",
      s_name: "Browser Dev Tools",
    },
    {
      s_logo: "/assets/lighthouse.png",
      s_name: "Lighthouse",
    },
    {
      s_logo: "/assets/Figma.png",
      s_name: "Figma",
    },
    {
      s_logo: "/assets/router.png",
      s_name: "Router",
    },
    {
      s_logo: "/assets/jquery.png",
      s_name: "JQuery",
    },
    {
      s_logo: "/assets/restapi.png",
      s_name: "REST Api",
    },
    {
      s_logo: "/assets/bootstrap.jpg",
      s_name: "Bootstrap",
    },
    {
      s_logo: "/assets/Axios.png",
      s_name: "Axios",
    },
    {
      s_logo: "/assets/nodejs.png",
      s_name: "Node.js",
    },
    {
      s_logo: "/assets/SQL.png",
      s_name: "SQL",
    },
    {
      s_logo: "/assets/babel.png",
      s_name: "Babel",
    },
    {
      s_logo: "/assets/Jira.png",
      s_name: "Jira",
    },
    {
      s_logo: "/assets/freemarker.png",
      s_name: "Freemarker",
    },
    {
      s_logo: "/assets/git.png",
      s_name: "Git",
    },
    {
      s_logo: "/assets/githubActions.png",
      s_name: "GitHub Actions",
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
    {
      s_logo: "/assets/vscode.jpg",
      s_name: "VSCode",
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
      s_logo: "/assets/gitlab.png",
      s_name: "Git Lab",
    },
    {
      s_logo: "/assets/bitBucket.jpg",
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
