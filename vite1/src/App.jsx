import { useState } from 'react'

function App() {
  const [counter , setCounter] =useState(Math.floor(Math.random()*10))

  const addValue=()=>{
    setCounter((xyz)=>xyz+1)
    setCounter((xyz)=>xyz+1)
    setCounter((xyz)=>xyz+1)
    setCounter((xyz)=>xyz+1)
  }

  const removeVal = () =>{
    setCounter((xyz)=>xyz-1)
    setCounter((xyz)=>xyz-1)
    setCounter((xyz)=>xyz-1)
    setCounter((xyz)=>xyz-1)
  }


  return (
    <>
    <h1>hi {counter}</h1>
    <button onClick={addValue}>
      Inc {counter}
    </button> {""}
    <button onClick={removeVal}>
      remove {counter}
    </button>
    </>
  )
}

export default App
