import React from "react";
import Card from "./common/Card";
import { CardOrientation } from "../constants";
import "../styles/styles.scss";

const StandOfArea = (props) => {
  const {
    standoffCardsValue,
    playersName,
    cardOrientation = CardOrientation.DOWN,
  } = props;
  return (
    <div className="standoff-area-wrapper">
      <div className="standoff-area-card-wrapper">
        {standoffCardsValue.map((value, i) => (
          <Card key={i} cardOrientation={cardOrientation} value={value} />
        ))}
      </div>
      <div className="standoff-area-text-wrapper">
        {playersName.map((name, i) => (
          <div key={i}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default StandOfArea;
