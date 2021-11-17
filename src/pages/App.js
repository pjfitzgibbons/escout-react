import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import AutoPhase from "./AutoPhase";
import Home from "./Home";
import NewMatch from "./NewMatch";
import Standby from "./Standby";
import SetGameWrapper from "./SetGameWrapper";
import { Counter } from "./Counter";
import { store } from "../context/MatchState";

function App() {
  return (
    <p>ESCOUT HELLO</p>
    // <Provider store={store}>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/newMatch" element={<NewMatch />} />
    //       <Route path="/counter" element={<Counter />} />
    //       <Route
    //         path="/standby"
    //         element={
    //           <SetGameWrapper team="123" match="44" alliance="red">
    //             <Standby />
    //           </SetGameWrapper>
    //         }
    //       />
    //       <Route
    //         path="/autoPhase"
    //         element={
    //           <SetGameWrapper team="123" match="44" alliance="blue">
    //             <AutoPhase />
    //           </SetGameWrapper>
    //         }
    //       />
    //     </Routes>
    //   </Router>
    // </Provider>
  );
}

export default App;
