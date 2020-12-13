import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, selectDeckSize, selectNewRound } from "../redux/gameStore";
import AIContanier from "./AIContainer";
import UserContainer from "./UserContainer";
import StandoffAreaContainer from "./StandoffAreaContainer";
import Divider from "./common/Divider";
import { PLAYER_ONE, PLAYER_TWO } from "../constants";
import "../styles/styles.scss";

export default function GameBoard() {
  const dispatch = useDispatch();
  const newRound = useSelector(selectNewRound);
  const deckSizePlayerOne = useSelector((state) =>
    selectDeckSize(state, PLAYER_ONE)
  );
  const deckSizePlayerTwo = useSelector((state) =>
    selectDeckSize(state, PLAYER_TWO)
  );

  useEffect(() => {
    const endOfGame = (message) => {
        alert(message);
        dispatch(reset());
      };

    if (newRound) {
      if (deckSizePlayerOne === 0) {
        endOfGame(`${PLAYER_TWO} WON!`);
      }
      if (deckSizePlayerTwo === 0) {
        endOfGame(`${PLAYER_ONE} WON!`);
      }
    }
  }, [newRound, deckSizePlayerOne, deckSizePlayerTwo]);
  return (
    <>
      <AIContanier />
      <Divider />
      <StandoffAreaContainer />
      <Divider />
      <UserContainer />
    </>
  );
}
