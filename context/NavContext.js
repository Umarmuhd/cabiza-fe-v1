import { useState, createContext } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => setShowNav(!showNav);

  return (
    <NavContext.Provider value={{ showNav, setShowNav, toggleShowNav }}>
      {children}
    </NavContext.Provider>
  );
};
