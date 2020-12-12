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
    standoffAreaCard: {
    },
    gameStage:{},
    newRound: true,
  };
}

const gameManagerSlice = createSlice({
  name: "gameManager",
  initialState: getInitialState(),
  reducers: {
    draw(state, action) {
      const { player } = action.payload;
      state.newRound = false
      if (state.deck[player].length && state.drawedCards[player].length < 3) {
        state.drawedCards[player].push(state.deck[player].pop());
      }
    },
    play(state, action) {
      const { player, cardId } = action.payload;
      state.standoffAreaCard[player] = cardId;
      state.drawedCards[player] = state.drawedCards[player].filter(
        (value) => value !== cardId
      );
    },
    roundWinnner(state) {
      const winnerCard = Math.max(...Object.values(state.standoffAreaCard))
      state.newRound = true;
    },
    reset: () => getInitialState(),
    newRoundSetUp(state, action) {},
  },
});

export const {
  draw,
  play,
  reset,
  roundWinnner,
  newRoundSetUp,
} = gameManagerSlice.actions;

export const selectDrawedCards = (state, player) => state.drawedCards[player];

export const selectDeckSize = (state, player) => state.deck[player].length;

export const selectNewRound = (state) => state.newRound;

export const selectstandoffAreaCard = (state) => state.standoffAreaCard;

export default gameManagerSlice.reducer;
