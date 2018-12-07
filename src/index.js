import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";
import HorizontalSwitch from "./lib/HorizontalSwitch";

class App extends Component {

  state = {
    isChecked: false
  };

  handleChange = (isChecked, key) => {
    console.log(key)
    console.log(isChecked)
  };

  render() {
    return (
      <div>
        <HorizontalSwitch onStateChange={this.handleChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
