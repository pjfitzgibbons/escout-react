import { useSelector } from "react-redux";
import  "../styles/Standby.css";
import { startGame } from "../context/matchSlice";
import { useDispatch } from "react-redux";

const gameSelector = (state) => state.match;

export default function Standby() {
  const game = useSelector(gameSelector);
  const dispatch = useDispatch()

  function goGame() {
    dispatch(startGame())
  }

  return (
    <div className="displayNone" id="standbyScreen">
      <h1 id="standbyTitle">Tap the button when match starts</h1>
      <br />
      <div className="gameInfo">
        Team: <span className={game.alliance}>{game.team}</span>
        Match: <span className={game.alliance}>{game.match}</span>
        Alliance: <span className={game.alliance}>{game.alliance}</span>
      </div>
      <button
        id="standbyButton"
        onClick={goGame}
      >
        Go ! !
      </button>
    </div>
  );
}
