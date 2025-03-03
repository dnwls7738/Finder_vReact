import React from "react";
import "./assets/css/global.css";
import App from "./App";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
