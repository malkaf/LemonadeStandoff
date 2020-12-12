import { createMuiTheme } from "@material-ui/core";
const PRIMARY_COLOR = "#ff0083";
const CARD_WIDTH = 98;
const CARD_HEIGHT = 136;

export default createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
      },
    },
  },
  MuiCardContent: {
    root: {
        
    },
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR,
      contrastText: "white",
    },
  },
});
