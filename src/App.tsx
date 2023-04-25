import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useRef } from "react";
import { useGame } from "./hooks";
import gameConfig from "./game";
function App() {
  const [count, setCount] = useState(0)
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);
  return (
    <>
    <div className="container"></div>
    <div ref={parentEl} className="gameContainer" />
    </>
  )
}

export default App
