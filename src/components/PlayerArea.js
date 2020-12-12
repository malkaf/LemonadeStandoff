import React from "react";
import Deck from "./common/Deck";
import HandArea from "./HandArea";
import "../styles/styles.scss";

const PlayerArea = (props) => {
  const { deckSize, handCards, onClickDeck, onClickHand, cardOrientation } = props;
  return (
    <div className="players-area-wrapper">
      <Deck deckSize={deckSize} onClick={onClickDeck}/>
      <HandArea handCards={handCards} cardOrientation={cardOrientation} onClick={onClickHand}/>
    </div>
  );
};

export default PlayerArea;
