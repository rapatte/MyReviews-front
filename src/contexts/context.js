/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, createContext } from "react";

const appContext = createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      setAuth: this.setAuth,
      setUser: this.setUser,
      user: null,
    };
  }

  setUser = (user) => {
    this.setState({ user });
  };

  setAuth = (bool) => {
    this.setState({ isAuth: bool });
  };

  render() {
    return (
      <appContext.Provider value={this.state}>
        {this.props.children}
      </appContext.Provider>
    );
  }
}

export { AppProvider };
export default appContext;
