import React from "react";
import Deck from "./common/Deck";
import HandArea from "./HandArea";
import "../styles/styles.scss";

const PlayerArea = (props) => {
  const {
    deckSize,
    handCards,
    onClickDeck,
    onClickHand,
    cardOrientation,
    disableDeck,
    disableHand,
  } = props;
  return (
    <div className="players-area-wrapper">
      <Deck deckSize={deckSize} onClick={onClickDeck} disable={disableDeck} />
      <HandArea
        handCards={handCards}
        cardOrientation={cardOrientation}
        onClick={onClickHand}
        disable={disableHand}
      />
    </div>
  );
};

export default PlayerArea;
