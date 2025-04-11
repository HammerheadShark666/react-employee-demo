import React from "react";

type Props = {
  onClick: () => void;
};

const HamburgerMenu: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="hamburger" onClick={onClick}>
      ☰
    </button>
  );
};

export default HamburgerMenu;