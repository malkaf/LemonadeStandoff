import React from "react";
import classNames from "classnames";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import { CardOrientation } from "../../constants";
import "../../styles/styles.scss";

const useStyles = makeStyles((theme) => {
  const color = theme.palette.primary.main;

  return createStyles({
    root: {
      borderRadius: "6px",
      boxSizing: "border-box",
      cursor: "pointer",
    },
    [CardOrientation.UP]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `4px solid ${color} `,
    },
    [CardOrientation.DOWN]: {
      background: `linear-gradient(45deg, ${color}, white)`,
      border: "1px solid rgba(0, 0, 0, 0.25)",
    },
    content: {
      fontSize: "36px",
      color,
    },
  });
});

const CardContanier = (props) => {
  const { cardOrientation, value, showShadow = true, style, onClick, disable } = props;
  const classes = useStyles();
  return (
    <Card
      data-testid='card'
      style={style}
      onClick={() => onClick?.(value)}
      className={classNames(classes[cardOrientation], classes.root, {
        "class-card-shadow": showShadow, "class-disabled": disable})}
    >
      {cardOrientation === CardOrientation.UP && (
        <CardContent className={classes.content}>{value}</CardContent>
      )}
    </Card>
  );
};

export default CardContanier;
