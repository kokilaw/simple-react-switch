import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import HorizontalSwitch from "./lib/HorizontalSwitch";

const App = () => (
  <div>
    <HorizontalSwitch />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
