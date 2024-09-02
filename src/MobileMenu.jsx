import React from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import TabValueContext from "./TabValueContext";

function MobileMenu({ navData }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setTabValue } = React.useContext(TabValueContext);

  return (
    <>
      {isOpen ? (
        <>
          <RxCross2
            className="menu-cross-icons"
            onClick={() => setIsOpen(false)}
          />
          <ul className="mob-nav">
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
        </>
      ) : (
        <RxHamburgerMenu
          className="menu-cross-icons"
          onClick={() => setIsOpen(true)}
        />
      )}
    </>
  );
}

export default MobileMenu;
