import { useSelector } from "react-redux";

import "../styles/AutoPhase.css";

const gameSelector = (state) => state.match;

export default function AutoPhase() {
  const game = useSelector(gameSelector);

  return (
    <div class="displayNone" id="autoScreen">
      <header>
        <div id="team">Team</div>
        <div className="match" id="match">
          Match
        </div>
        <div className="timer" id="timer"></div>
        <div className="alliance" id="alliance">
          Alliance
        </div>
        <div className={`teamNum ${game.alliance}`}>{game.team}</div>
        <div className={`matchNum ${game.alliance}`}>{game.match}</div>
        <div className={`timerSecs ${game.alliance}`}></div>
        <div className={`alliianceName ${game.alliance}`}>{game.alliance}</div>
      </header>

      <main>
        <div class="box highGoal" id="highGoal" onclick="increment('HighGoal')">
          <div class="dataLabel">High Goal</div>
          <div class="dataField">0</div>
          <div class="keyLabel">F</div>
        </div>

        <div
          class="box innerGoal"
          id="innerGoal"
          onclick="increment('InnerGoal')"
        >
          <div class="dataLabel">Inner Goal</div>
          <div class="dataField">0</div>
          <div class="keyLabel">D</div>
        </div>

        <div
          class="box missedShots"
          id="missedShots"
          onclick="increment('MissedShots')"
        >
          <div class="dataLabel">Missed Shot</div>
          <div class="dataField">0</div>
          <div class="keyLabel">J</div>
        </div>

        <div class="box lowGoal" id="lowGoal" onclick="increment('LowGoal')">
          <div class="dataLabel">Low Goal</div>
          <div class="dataField">0</div>
          <div class="keyLabel">A</div>
        </div>

        <div class="blank widgetOne" id="blankWidgetOne"></div>

        <div
          class="box autoMobility"
          id="bool1"
          onclick="gameData.autoMobility = true"
        >
          <div class="dataLabel">Auto Mobility</div>
          <div class="dataField"></div>
          <div class="keyLabel">K</div>
        </div>

        <div class="blank widgetThree" id="blankWidgetThree"></div>
      </main>
    </div>
  );
}
