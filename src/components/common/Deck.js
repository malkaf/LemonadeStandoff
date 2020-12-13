import React from "react";
import Card from "./Card";
import { CardOrientation } from "../../constants";
import "../../styles/styles.scss";

const Deck = (props) => {
  const { deckSize, onClick, disable } = props;
  const isDeck = deckSize > 0;
  const isNotSingle = deckSize > 1;

  const createCard = (key) => {
    return (
      <Card
        key={key}
        cardOrientation={CardOrientation.DOWN}
        showShadow={false}
        style={{
          transform: `translate(${1.5 * key}px, ${1.5 * key}px)`,
        }}
        onClick={onClick}
        disable={disable}
      />
    );
  };

  return (
    <div className="deck-wrapper">
      {isNotSingle && [...Array(deckSize - 1)].map((_v, i) => createCard(i))}
      {isDeck && createCard(deckSize - 1)}
    </div>
  );
};

export default Deck;
