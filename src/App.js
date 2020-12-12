import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@material-ui/core";
import LemonadeStandoff from "./components/LemonadeStandoff";
import theme from "./styles/theme"

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LemonadeStandoff />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
