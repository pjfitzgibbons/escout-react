import { createSlice } from "@reduxjs/toolkit";
import { interval } from "rxjs";

export const PHASES = {
  newMatch: "newMatch",
  standby: "standby",
  auto: "auto",
  teleop: "teleop",
  endGame: "endGame",
  gameOver: "gameOver",
};

// this is an RxJS Observable.  Subscribing
// any fn to this clock will execute on every 
// tick - n millionds.tervalClock = interval(1000)
export const intervalClock = interval(1000)

// a function that returns a function
const createTimerSubscription = (timerObj) => intervalClock.subscribe(_ => timerObj++)

export const initialGame = {
  team: "",
  match: "",
  alliance: "blue",
  phase: PHASES.newMatch,
  autoMobility: false,
  climbing: 0,
  climbingSubscription: null,
  climbAttempt: false,
  defending: false,
  penalty: false,
  autoPhase: {
    high: 0,
    inner: 0,
    low: 0,
    missed: 0,
  },
  teleop: {
    high: 0,
    inner: 0,
    low: 0,
    missed: 0,
  },
};

export const matchSlice = createSlice({
  name: "game",
  initialState: initialGame,
  reducers: {
    setMatch: (state, action) => {
      let { team, match, alliance } = action.payload;
      console.log("setMatch", { team, match, alliance });
      state.team = team;
      state.match = match;
      state.alliance = alliance;
    },
    startGame: (state) => {
      state.phase = PHASES.auto;
    },
    startTimer: (state, phase, timer) => {
      let fnName = timer + "Subscription"
      const timerfn = state[phase][fnName]
      state[phase][fnName] = timerfn || createTimerSubscription(state[phase][timer])
    },
    stopTimer: (state, phase, timer) => {
      let fnName = timer + "Subscription"
      state[phase][fnName].unsubscribe()
    },
  },
});

export const { setMatch, startGame } = matchSlice.actions;

export default matchSlice.reducer;

console.log({matchSlice, reducer: matchSlice.reducer, intervalClock, createTimerSubscription})
