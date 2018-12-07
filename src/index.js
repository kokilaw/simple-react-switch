import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";
import { HorizontalSwitch} from "./lib";

class App extends Component {

  handleChange = (isChecked, key) => {
    // Take action...
  };

  render() {
    return (
      <div>
        <HorizontalSwitch
          onStateChange={this.handleChange}
          key={"sample-key"}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
