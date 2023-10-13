import React, { useState } from "react";
import NavContext from "./NavContext";

const NavProvider = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };
  return (
    <NavContext.Provider value={{ isNavbarOpen, toggleNavbar }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
