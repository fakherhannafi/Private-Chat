import React from "react";
import { render } from "react-dom";
import EditProfile from "./EditProfile.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <EditProfile />;
  }
}

render(<App />, document.getElementById("app"));
