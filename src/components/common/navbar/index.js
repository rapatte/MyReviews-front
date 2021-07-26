import React from "react";
import { PAGE_HOME, PAGE_LOGIN } from "../../../constants/router";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => (
  <>
    <Nav>
      <NavLink to={PAGE_HOME}>
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/reviews" activeStyle>
          Les reviews
        </NavLink>
        <NavLink to="/addReview" activeStyle>
          Créer une review
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to={PAGE_LOGIN}>Se connecter</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
);

export default Navbar;
