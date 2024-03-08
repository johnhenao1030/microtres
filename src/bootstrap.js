import React from "react";
import ReactDOM from "react-dom";
import Text from "./components/text";

import "./index.css";
 
const App = () => (
  <div className="container">
    <Text />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
