import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import TodaysDate from "./TodaysDate";

type Props = {
  onHamburgerClick: () => void;
};

const Header: React.FC<Props> = ({ onHamburgerClick }) => {
  return (
    <header className="header">      
      <h1 className="title-header">Wolds HR</h1>
      <TodaysDate></TodaysDate>
      <HamburgerMenu onClick={onHamburgerClick} />
    </header>
  );
};

export default Header;
