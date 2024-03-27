import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15)
  // let counter = 5
const login = () =>{
  
   setCounter(counter+1)
  
}

const removeApp=() =>{
  setCounter(counter-1)
}
  return (
    <>
      <h1>Boring code</h1>
      <h2>Counter boring value: {counter}</h2>
      <button
      onClick={login}>login</button>&nbsp;<button onClick={removeApp}>sign up</button>
    </>
  )
}

export default App
