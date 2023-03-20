import { useState } from "react";
import { menuIcon } from "../../helper/iconData";
import { Nav, Logo, Menu, MenuLink, HamburgerIcon } from "./Navbar.style";
const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Library</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/" onClick={() => setShowMenu(false)}>
          Home
        </MenuLink>
        <MenuLink to="/about" onClick={() => setShowMenu(false)}>
          About
        </MenuLink>

        {currentUser ? (
          <MenuLink
            to="/login"
            onClick={() => {
              logout();
              setShowMenu(false);
            }}
          >
            Logout
          </MenuLink>
        ) : (
          <>
            {" "}
            <MenuLink to="/register" onClick={() => setShowMenu(false)}>
              Register
            </MenuLink>
            <MenuLink to="/login" onClick={() => setShowMenu(false)}>
              Login
            </MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
