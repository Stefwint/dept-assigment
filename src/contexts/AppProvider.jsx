import React, { Component } from 'react';

/* Create new context */
const AppContext = React.createContext();

/* Create provider Component */
class AppProvider extends Component {
  state = {
    menus: {},
  };

  static getDerivedStateFromProps(props) {
    const update = {};
    if (props.menus) {
      update.menus = props.menus;
    }
    return update;
  }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state }}>{this.props.children}</AppContext.Provider>
    );
  }
}

/* Create Consumer */
const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer, AppContext };
