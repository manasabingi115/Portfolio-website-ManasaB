import React from "react";
import MobileMenu from "./MobileMenu";
import TabValueContext from "./TabValueContext";

function Header() {
  const navData = [
    { item: "Home", id: "#home" },
    { item: "About", id: "#about" },
    { item: "Work", id: "#work-skills" },
    { item: "Skills", id: "#work-skills" },
    { item: "Projects", id: "#projects" },
    { item: "Contact", id: "#contact" },
  ];

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const { setTabValue } = React.useContext(TabValueContext);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header_container">
      <div className="header">
        <div className="meetme">
          <h1 name="test">MANASA BINGI</h1>
        </div>
        {isMobile ? (
          <MobileMenu navData={navData} />
        ) : (
          <div className="nav-items">
            <ul className="nav navbar-nav menu_nav">
              {navData.map((data, index) => (
                <li
                  className="nav_item"
                  key={index}
                  onClick={() =>
                    data.item == "Work"
                      ? setTabValue("experience")
                      : data.item == "Skills" && setTabValue("skills")
                  }
                >
                  <a className="nav-link" href={data.id}>
                    {data.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
