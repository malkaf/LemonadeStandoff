import React, { useEffect } from "react";
import StandoffArea from "./StandoffArea";
import { CardOrientation } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  roundWinnner,
  newRoundSetUp,
  setWarTime,
  selectStandoffAreaCard,
  selectIsWarTime,

} from "../redux/gameStore";
import "../styles/styles.scss";

const StandoffAreaContainer = () => {
  const dispatch = useDispatch();
  const standoffCards = useSelector(selectStandoffAreaCard);
  const isWarTime = useSelector(selectIsWarTime);

  useEffect(() => {
    if (Object.keys(standoffCards).length === 2) {
      dispatch(setWarTime())
      setTimeout(() => {
        dispatch(roundWinnner());
        dispatch(newRoundSetUp());
      }, 1000);
    }
  }, [standoffCards]);

  return (
    <StandoffArea
      standoffCardsValue={Object.keys(standoffCards).map(
        (name) => standoffCards[name]
      )}
      playersName={Object.keys(standoffCards)}
      cardOrientation={isWarTime ? CardOrientation.UP : CardOrientation.DOWN}
    />
  );
};

export default StandoffAreaContainer;
