import React from "react";
import Card from "./Card";
import { CardOrientation } from "../../constants";
import "../../styles/styles.scss";

const createCard = ({ key, onClick }) => {
  return (
    <Card
      key={key}
      cardOrientation={CardOrientation.DOWN}
      showShadow={false}
      style={{
        transform: `translate(${1.5 * key}px, ${1.5 * key}px)`,
      }}
      onClick={onClick}
    />
  );
};

const Deck = (props) => {
  const { deckSize, onClick } = props;
  const isDeck = deckSize > 0;
  const isNotSingle = deckSize > 1;

  return (
    <div className="deck-wrapper">
      {isNotSingle &&
        [...Array(deckSize - 1)].map((_v, i) => createCard({ key: i }))}
      {isDeck && createCard({ key: deckSize - 1, onClick })}
    </div>
  );
};

export default Deck;
