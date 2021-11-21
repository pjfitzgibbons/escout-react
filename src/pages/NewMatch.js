import { useState } from "react"
import { useDispatch } from "react-redux"
import { setMatch as submitGame, initialGame } from "../context/matchSlice"

export default function NewMatch() {
  // const matchState = useSelector((state) => state.match)
  const dispatch = useDispatch()

  const [game, setGame] = useState(
    initialGame
  )

  let errors = ""

  function setTeam(event) {
    setGame({ ...game, team: event.target.value })
  }
  function setMatch(event) {
    setGame({ ...game, match: event.target.value })
  }
  function setAlliance(event) {
    setGame({ ...game, alliance: event.target.value })
  }
  function submit() {
    if (game.team === '' || game.match === '') {
      errors = "Please enter all fields."
    } else {
      errors = ''
      dispatch(submitGame(game))
      console.log("dispatched")
    }
    console.log(game)
  }

  return (
    <div id="inputScreen">
      <h1 id="Header">New Match :</h1>
      <form>
        <label htmlFor="teamNumber">
          Team Number:
        </label>
        <input
          type="text"
          id="teamNumber"
          name="teamNumber"
          defaultValue={game.team}
          autoFocus
          onChange={setTeam}
        />
        <br />

        <label htmlFor="matchNumber">
          Match Number
        </label>
        <input
          type="text"
          id="matchNumber"
          name="matchNumber"
          defaultValue={game.match}
          onChange={setMatch}
        />

        <fieldset id="alliance">
          <legend>Alliance:</legend>
          <input
            id="redAlliance"
            name="alliance"
            type="radio"
            value="red"
            onChange={setAlliance}
            defaultChecked={game.alliance === "red"}
          />
          <label htmlFor="redAlliance">
            Red
          </label>
          <br />

          <input
            type="radio"
            id="blueAlliance"
            name="alliance"
            value="blue"
            onChange={setAlliance}
            defaultChecked={game.alliance === "blue"}
          />
          <label htmlFor="blueAlliance">
            Blue
          </label>
          <br />
        </fieldset>
        <input
          className="submit"
          type="button"
          value="Start Match!"
          onClick={submit}
        />
      </form>
      <div id="initScreenErrors">
        {errors}
      </div>
    </div>
  )
}


