import { useSelector } from "react-redux";

import CounterBox from "../components/CounterBox"

import "../styles/AutoPhase.css";
// import { setMatch as submitGame, initialGame } from "../context/matchSlice"

const gameSelector = (state) => state.match;

export default function AutoPhase() {
  const game = useSelector(gameSelector);

  return (
    <div className="displayNone" id="autoScreen">
      <header>
        <div id="team" data-alttext="T"><span>Team</span></div>
        <div className="match" id="match" data-alttext="M">
          <span>Match</span>
        </div>
        <div className="timer" id="timer" />
        <div className="alliance" id="alliance" data-alttext="A">
          <span>Alliance</span>
        </div>
        <div className={`teamNum ${game.alliance}`}>{game.team}</div>
        <div className={`matchNum ${game.alliance}`}>{game.match}</div>
        <div className={`timerSecs ${game.alliance}`} />
        <div className={`alliianceName ${game.alliance}`}>{game.alliance}</div>
      </header>

      <main>
        <CounterBox id="high" label="High Goal" keyLabel="F" />
        <CounterBox id="inner" label="Inner Goal" keyLabel="D" />
        <CounterBox id="low" label="Low Goal" keyLabel="A" />
        <CounterBox id="missed" label="Missed Goal" keyLabel="J" />

        <div
          className="box autoMobility"
          id="bool1"
        >
          <div className="dataLabel">Auto Mobility</div>
          <div className="dataField" />
          <div className="keyLabel">K</div>
        </div>
      </main>
    </div>
  );
}
