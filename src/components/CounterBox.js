import { useState, useEffect } from "react"
// import AutoPhase from "../pages/AutoPhase"
import styles from "../styles/AutoPhase.module.css"

export default function CounterBox({id, label, keyLabel}) {

  const [counter, setCounter] = useState(0)
  const keyLabelLower = keyLabel.toLowerCase()

  function increment() {
    console.log("increment")
    setCounter(c => c+1 )
  }

  /*
  Keypress event :
    `listener` fn matches event.key to prop keyLabel, and prevents default action of key.
    `addEventListener` adds this listener to document-level keypress event subscription
    Return value of useEffect is the "unsubscribe" function -- remove this listener fn
        from the document-level keypress subscription.
   */
  useEffect(() => {
    const listener = event => {
      event.preventDefault();
      if (event.key === keyLabelLower) {
        increment()
      }
    };
    document.addEventListener("keypress", listener);
    return () => {
      document.removeEventListener("keypress", listener);
    };
  });

  function keyHandler(evt) {
    console.log(evt.key)
  }
  return (
    <div className={ `box highGoal ${styles[id]}` } onClick={increment} onKeyPress={keyHandler}>
      <div className="dataLabel">{label}</div>
      <div className="dataField" >{counter} </div>
      <div className="keyLabel">{keyLabel}</div>
    </div>
  )
}