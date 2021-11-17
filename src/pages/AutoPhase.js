import { useSelector } from "react-redux";

import CounterBox from "../components/CounterBox"

import "../styles/AutoPhase.css";

const gameSelector = (state) => state.match;

export default function AutoPhase() {
  const game = useSelector(gameSelector);

  return (
    <div className="displayNone" id="autoScreen">
      <header>
        <div id="team">Team</div>
        <div className="match" id="match">
          Match
        </div>
        <div className="timer" id="timer" />
        <div className="alliance" id="alliance">
          Alliance
        </div>
        <div className={`teamNum ${game.alliance}`}>{game.team}</div>
        <div className={`matchNum ${game.alliance}`}>{game.match}</div>
        <div className={`timerSecs ${game.alliance}`} />
        <div className={`alliianceName ${game.alliance}`}>{game.alliance}</div>
      </header>

      <main>
        <CounterBox label="High Goal" keyLabel="F" />
        <CounterBox label="Inner Goal" keyLabel="D" />
        <CounterBox label="Missed Goal" keyLabel="J" />
        <CounterBox label="Low Goal" keyLabel="A" />


        <div className="blank widgetOne" id="blankWidgetOne" />

        <div
          className="box autoMobility"
          id="bool1"
        >
          <div className="dataLabel">Auto Mobility</div>
          <div className="dataField" />
          <div className="keyLabel">K</div>
        </div>

        <div className="blank widgetThree" id="blankWidgetThree" />
      </main>
    </div>
  );
}
