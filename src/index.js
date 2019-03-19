import React from "react";
import ReactDOM from "react-dom";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import SelectBox from "./SelectBox.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <InputLabel>Hello CodeSandbox</InputLabel>
      <ListItemText>Start editing to see some magic happen!</ListItemText>
      <SelectBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
