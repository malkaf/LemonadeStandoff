import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "@material-ui/core";
import GameBoard from "./GameBoard";
import theme from "../styles/theme";

export default function Lemonadestandoff() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GameBoard />
      </ThemeProvider>
    </Provider>
  );
}
