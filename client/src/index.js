import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// App theme
import theme from "../src/assets/jss/phoenix-kit-react/theme/Palette";
import { MuiThemeProvider } from "@material-ui/core/styles";

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}
render();

registerServiceWorker();
