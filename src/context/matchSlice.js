import { createSlice } from "@reduxjs/toolkit"


export const PHASES = {
  newMatch: "newMatch",
  standby: "standby",
  auto: "auto",
  teleop: "teleop",
  endGame: "endGame",
  gameOver: "gameOver",
}

export const initialState = {
  team: '',
  match: '',
  alliance: 'blue',
  phase: PHASES.newMatch,
}

export const matchSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setMatch: (state, action) => {
      let {team, match, alliance} = action.payload
      console.log("setMatch", {team, match, alliance})
      state.team = team
      state.match = match
      state.alliance = alliance
    },
    startGame: (state) => {
      state.phase = PHASES.auto
    },
  }
})

export const { setMatch, startGame } = matchSlice.actions

export default matchSlice.reducer