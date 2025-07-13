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
          LET'S <br />
          INTRODUCE ABOUT <br />
          MY SELF
        </h2>
        <p>
          Motivated Front-End Developer with 3+ years of experience building
          responsive web applications using React.js, Next.js, JavaScript
          (ES6+), and TypeScript. Skilled in developing reusable components,
          optimizing performance, and ensuring cross-browser accessibility.
          Proficient in Agile teams with hands-on experience in Redux, GraphQL,
          and testing frameworks like Jest. Strong focus on clean, maintainable
          code and UI/UX best practices.
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
