import React, { useContext } from "react";
import { PAGE_HOME, PAGE_LOGIN, PAGE_REVIEWS } from "../../../constants/router";
import appContext from "../../../contexts/context";
import { removeUserSession } from "../../../utils/common";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  const context = useContext(appContext);
  const { isAuth } = context;
  return (
    <>
      <Nav>
        <NavLink to={PAGE_HOME}>
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to={PAGE_REVIEWS}>Les reviews</NavLink>
          {isAuth && <NavLink to="/addReview">Créer une review</NavLink>}
        </NavMenu>
        {isAuth ? (
          <NavBtn>
            <NavBtnLink to={PAGE_HOME} onClick={removeUserSession}>
              Se déconnecter
            </NavBtnLink>
          </NavBtn>
        ) : (
          <NavBtn>
            <NavBtnLink to={PAGE_LOGIN}>Se connecter</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
