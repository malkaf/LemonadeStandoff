import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  draw,
  play,
  selectDrawedCards,
  selectDeckSize,
  selectNewRound,
} from "../redux/gameStore";
import PlayerArea from "./PlayerArea";
import { PLAYER_ONE } from "../constants";

const AIContainer = () => {
  const dispatch = useDispatch();
  const handCards = useSelector((state) =>
    selectDrawedCards(state, PLAYER_ONE)
  );
  const deckSize = useSelector((state) => selectDeckSize(state, PLAYER_ONE));
  const newRound = useSelector(selectNewRound);

  useEffect(() => {
    if (newRound) {
      setTimeout(() => dispatch(draw({ player: PLAYER_ONE })), 500);
      setTimeout(() => dispatch(draw({ player: PLAYER_ONE })), 1000);
    }
  }, [newRound, dispatch]);

  useEffect(() => {
    if (handCards.length === 2)
      setTimeout(
        () =>
          dispatch(
            play({ cardId: Math.max(...handCards), player: PLAYER_ONE })
          ),
        500
      );
  }, [handCards, dispatch]);

  return (
    <PlayerArea
      deckSize={deckSize}
      handCards={handCards}
      disableDeck={true}
      disableHand={true}
    />
  );
};

export default AIContainer;
