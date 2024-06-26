function Header() {
  const navData = [
    { item: "Home", id: "#home" },
    { item: "About", id: "#about" },
    { item: "Work", id: "#work-skills" },
    { item: "Skills", id: "#work-skills" },
    { item: "Projects", id: "#projects" },
    { item: "Contact", id: "#contact" },
  ];

  return (
    <div className="header_container">
      <div className="header">
        <div className="meetme">
          <h1 name="test">MEETME</h1>
        </div>
        <div className="nav-items">
          <ul className="nav navbar-nav menu_nav">
            {navData.map((data, index) => (
              <li className="nav_item" key={index}>
                <a className="nav-link" href={data.id}>
                  {data.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
