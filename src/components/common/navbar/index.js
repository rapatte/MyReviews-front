import React from "react";
import { PAGE_HOME, PAGE_LOGIN, PAGE_REVIEWS } from "../../../constants/router";
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
        <NavLink to={PAGE_REVIEWS}>Les reviews</NavLink>
        <NavLink to="/addReview">Créer une review</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to={PAGE_LOGIN}>Se connecter</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
);

export default Navbar;
