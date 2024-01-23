import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor] = useState('olive')

  // function changeColor(color){
  //   setcolor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 text-2xl' style={{backgroundColor: color}}>
      HELLO
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3
        py-2 rounded-3xl'>
          <button 
            onClick={() => setcolor('red')}
          className='outline-none px-4 rounded-full text-black shadow-lg ' style={{color:color}}>Red</button> 
          <button 
          onClick={() => setcolor('green')}
          className='outline-none px-4 rounded-full text-black shadow-lg 'style={{color:color}}>Green</button> 
          <button 
          onClick={() => setcolor('yellow')}
          className='outline-none px-4 rounded-full text-black shadow-lg 'style={{color:color}}>Yellow</button> 
          <button 
          onClick={() => setcolor('blue')}
          className='outline-none px-4 rounded-full text-black shadow-lg 'style={{color:color}}>Blue</button> 
          <button 
          onClick={() => setcolor('white')}
          className='outline-none px-4 rounded-full text-black shadow-lg 'style={{color:color}}>White</button> 
        </div>  
      </div>

    </div>
  )
}


export default App
