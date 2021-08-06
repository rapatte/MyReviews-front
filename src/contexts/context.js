/* eslint-disable react/prefer-stateless-function */
import React, { Component, createContext } from "react";

const appContext = createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuth: false,
      setUser: this.setUser,
      setAuth: this.setAuth,
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
