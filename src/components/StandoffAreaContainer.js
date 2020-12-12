import React, { useEffect } from "react";
import StandoffArea from "./StandoffArea";
import { CardOrientation } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {roundWinnner,selectstandoffAreaCard,} from "../redux/gameStore";
import PlayerArea from "./PlayerArea";
import { PLAYER_ONE } from "../constants";
import "../styles/styles.scss";

const StandoffAreaContainer = () => {
  const dispatch = useDispatch();
  const standoffCards = useSelector(selectstandoffAreaCard);

  useEffect(() => {
    if (standoffCards.length === 2) {
        dispatch(roundWinnner())
    }
  }, [standoffCards]);

  return (
    <StandoffArea
      standoffCardsValue={Object.keys(standoffCards).map(name => standoffCards[name])}
      playersName={Object.keys(standoffCards)}
      CardOrientation = {CardOrientation.DOWN}
    />
  );
};

export default StandoffAreaContainer;
