import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Header from "./components/Header";
import Security from "./components/security";
import Roulette from "./components/roulette";

function App() {
  const [allowed, setAllowed] = new useState(false);

  return (
    <div className="App">
      <Header isAllowed={allowed}/>
      {!allowed ? <Security setAllowed={setAllowed}/> : <Roulette/>}
    </div>
  );
}

export default App;
