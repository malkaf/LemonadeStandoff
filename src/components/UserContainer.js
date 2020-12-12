import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  draw,
  play,
  selectDrawedCards,
  selectDeckSize,
  selectFinishedDrawing,
  selectPlayedCard
} from "../redux/gameStore";
import PlayerArea from "./PlayerArea";
import { CardOrientation, PLAYER_TWO } from "../constants";

const UserContainer = () => {
  const dispatch = useDispatch();
  const handCards = useSelector((state) =>
    selectDrawedCards(state, PLAYER_TWO)
  );
  const isFinishedDrawing = useSelector((state) =>
    selectFinishedDrawing(state, PLAYER_TWO)
  );
  const isCardPlayed = useSelector((state)=> selectPlayedCard(state, PLAYER_TWO))
  const deckSize = useSelector((state) => selectDeckSize(state, PLAYER_TWO));

  return (
    <PlayerArea
      deckSize={deckSize}
      handCards={handCards}
      cardOrientation={CardOrientation.UP}
      onClickDeck={() => dispatch(draw({ player: PLAYER_TWO }))}
      onClickHand={(value) =>
        dispatch(play({ cardId: value, player: PLAYER_TWO }))
      }
      disableDeck={isFinishedDrawing}
      disableHand={isCardPlayed}
    />
  );
};

export default UserContainer;
