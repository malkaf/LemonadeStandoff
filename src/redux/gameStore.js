import { createSlice } from "@reduxjs/toolkit";
import { fillArrayWithRange, shuffle } from "../utils/functions";
import { NUMBER_OF_CARDS_IN_GAME, PLAYER_ONE, PLAYER_TWO } from "../constants";

const cards = fillArrayWithRange(1, NUMBER_OF_CARDS_IN_GAME);
const halfNumOfGameCards = NUMBER_OF_CARDS_IN_GAME / 2;

function getInitialState() {
  const gameCards = shuffle(cards);
  return {
    deck: {
      [PLAYER_ONE]: gameCards.splice(0, halfNumOfGameCards),
      [PLAYER_TWO]: gameCards.splice(-halfNumOfGameCards),
    },
    drawedCards: {
      [PLAYER_ONE]: [],
      [PLAYER_TWO]: [],
    },
    standoffAreaCard: {},
    finishedDrawing: {
      [PLAYER_ONE]: false,
      [PLAYER_TWO]: false,
    },
    playedCard: {
      [PLAYER_ONE]: false,
      [PLAYER_TWO]: false,
    },
    isWarTime: false,
    newRound: true,
  };
}

const gameManagerSlice = createSlice({
  name: "gameManager",
  initialState: getInitialState(),
  reducers: {
    draw(state, action) {
      const { player } = action.payload;
      state.newRound = false;
      const decksTopMustCard = state.deck[player].pop();
      state.drawedCards[player].push(decksTopMustCard);
      if (state.drawedCards[player].length === 3) {
        state.finishedDrawing[player] = true;
      }
    },
    play(state, action) {
      const { player, cardId } = action.payload;
      state.finishedDrawing[player] = true;
      state.playedCard[player] = true;
      state.standoffAreaCard[player] = cardId;
      state.drawedCards[player] = state.drawedCards[player].filter(
        (value) => value !== cardId
      );
    },
    setWarTime(state) {
      state.isWarTime = true;
    },
    roundWinnner(state) {
      const standoffAreaCardsValue = Object.values(state.standoffAreaCard)
      const winnerCard = Math.max(...standoffAreaCardsValue);
      const roundWinner = Object.keys(state.standoffAreaCard).find(
        (key) => state.standoffAreaCard[key] === winnerCard
      );
      Object.values(state.drawedCards).forEach((cardGroup) =>
        state.deck[roundWinner].push(...cardGroup)
      );
      state.deck[roundWinner].push(...standoffAreaCardsValue);
      state.drawedCards[PLAYER_ONE] = [];
      state.drawedCards[PLAYER_TWO] = [];
      state.standoffAreaCard = {};
      state.deck[roundWinner] = shuffle(state.deck[roundWinner]);
    },
    newRoundSetUp(state) {
      state.finishedDrawing[PLAYER_ONE] = false;
      state.finishedDrawing[PLAYER_TWO] = false;
      state.playedCard[PLAYER_ONE] = false;
      state.playedCard[PLAYER_TWO] = false;
      state.isWarTime = false;
      state.newRound = true;
    },
    reset: () => getInitialState(),
  },
});

export const {
  draw,
  play,
  setWarTime,
  roundWinnner,
  newRoundSetUp,
  reset,
} = gameManagerSlice.actions;

export const selectDrawedCards = (state, player) => state.drawedCards[player];

export const selectDeckSize = (state, player) => state.deck[player].length;

export const selectFinishedDrawing = (state, player) =>
  state.finishedDrawing[player];

export const selectPlayedCard = (state, player) => state.playedCard[player];

export const selectNewRound = (state) => state.newRound;

export const selectStandoffAreaCard = (state) => state.standoffAreaCard;

export const selectIsWarTime = (state) => state.isWarTime;

export default gameManagerSlice.reducer;
