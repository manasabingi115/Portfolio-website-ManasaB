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
          Motivated Software Engineer with over 2 years of experience in the
          software industry, seeking to leverage my technical skills in HTML,
          CSS, React, JavaScript, and other technologies in a challenging role.
          Committed to creating robust and user-friendly applications.
        </p>
        <a
          className="primary_btn"
          href="%PUBLIC_URL%/assets/resume.pdf"
          download="ManasaBingi_Resume.pdf"
        >
          <span>DOWNLOAD CV</span>
        </a>
      </div>
    </div>
  );
}

export default About;
