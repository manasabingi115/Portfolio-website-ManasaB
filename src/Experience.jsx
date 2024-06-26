function Experience() {
  const expData = [
    {
      compLogo: "/assets/company-logo.jpg",
      compName: "iTalent Digital",
      startEndDate: "March 2022 - Present",
      compLocation: "Hyderabad",
      description: "Working as a Software Engineer",
    },
  ];
  return (
    <div id="work">
      {/* <h2>Experience</h2> */}
      {expData.map((data, index) => (
        <div className="exp_container" key={index}>
          <div className="company_logo">
            <img
              src={data.compLogo}
              alt="comapny-logo"
              height={60}
              width={100}
            />
          </div>
          <div className="exp_description">
            <h3>{data.compName}</h3>
            <p className="exp_date_place">
              <span>{data.startEndDate}</span>
              <span>{data.compLocation}</span>
            </p>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
