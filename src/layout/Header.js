import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  NavbarText,
  NavbarBrand,
} from "reactstrap";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(UserContext);

  const toggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="bg-info" light expand="md">
      <NavbarBrand >
       <Link to="/" className="text-white"> Github App</Link>
        <NavbarText className="ml-2 text-white">
          {context.user?.email ? context.user.email : ""}
        </NavbarText>
      </NavbarBrand>

      <NavbarToggler onClick={toggler} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {context.user?.email ? (
            <NavItem>
              <NavLink onClick={()=>context.setUser(null) } className="text-white" role="button">Logout</NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  SignIn
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
