import React from "react";
import { Divider, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: "linear-gradient( 90deg, #fff, #fff 50%, #000 50%, #000 )",
      backgroundSize: "2px 2px",
    },
  })
);

const DividerContainer = (props) => {
  const { orientation = "horizontal", variant = "fullWidth" } = props;
  const classes = useStyles();

  return (
    <Divider orientation={orientation} variant={variant} classes={classes} />
  );
};

export default DividerContainer;