function About() {
  return (
    <div className="profile_container" id="about">
      <div className="profile_img" style={{ width: "50%" }}>
        <img
          src="https://preview.colorlib.com/theme/satner/img/banner/home-right.png.webp"
          alt="profile-photo"
          height={500}
          width={500}
        />
      </div>
      <div style={{ width: "50%" }} className="profile_description">
        <h2>
          LET&apos;S <br />
          INTRODUCE ABOUT <br />
          MY SELF
        </h2>
        <p>
          Experienced Software Engineer with 4+ years of expertise specialising
          in Front-End development, building scalable, responsive web
          applications. Proficient in React.js, Next.js, JavaScript (ES6+), and
          TypeScript, with hands-on experience in Micro Frontend architecture,
          Redux, GraphQL, and React Query for complex state management. Skilled
          in performance optimisation, cross-browser compatibility, and web
          accessibility, with a strong command of modern tooling including
          Webpack, Vite, and Azure DevOps. Experienced in Agile teams using
          Jira, with a disciplined focus on clean, maintainable code, reusable
          component design, and thorough testing using Jest and Vitest.
          Comfortable working across the full UI stack from Figma designs to
          production-ready, accessible interfaces.
        </p>
        <a
          className="primary_btn"
          href="/assets/ManasaBingi_FrontEndDeveloper_Resume_25.7.pdf"
          download="ManasaBingi_FrontEndDeveloper_Resume_25.7.pdf"
        >
          <span>DOWNLOAD CV</span>
        </a>
      </div>
    </div>
  );
}

export default About;
