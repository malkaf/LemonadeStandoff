import React from "react";
import { CardOrientation } from "../constants";
import Card from "./common/Card";
import "../styles/styles.scss";

const HandArea = (props) => {
  const { handCards, cardOrientation = CardOrientation.DOWN, onClick } = props;

  return (
    <div className="hand-area-wrapper">
      {handCards.map((value, i) => (
        <Card cardOrientation={cardOrientation} onClick={onClick} value={value} key={i}/>
      ))}
    </div>
  );
};

export default HandArea;
