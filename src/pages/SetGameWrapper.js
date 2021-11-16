import { useLayoutEffect } from "react"
import { useDispatch } from "react-redux"
import { setMatch as submitGame } from "../context/matchSlice"

export default function SetGameWrapper({children, team, match, alliance}) {

  const dispatch = useDispatch()

  // set game state before render
  useLayoutEffect(() => {
    console.log("willSubmitGame", {team, match, alliance})
    dispatch(submitGame({team, match, alliance}))
  }, [dispatch, alliance, match, team]) 

  return(
    <div>
      {children}
    </div>
  )
}