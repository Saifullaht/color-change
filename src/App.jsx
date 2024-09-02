import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color , setColor] = useState(null);
   
  const addColor = () => {
    setColor(" yellow") ;  
     
    
  }
  const addColor1 = () => {
    setColor(" blue ")  ;
    
    
  }
  const addColor2 = () => {
    setColor(" green ") ;  
  }
  const addColor3 = () => {
    setColor(" red ") ;  
    
  }
  const addColor4 = () => {
    setColor(" brown ") ; 
    
  }
  
  return (
    <>
    <h1>color-change</h1>
    <div className='mainbtn'> 
    <button className='btn' onClick={addColor} > Yellow  </button>  
    <button className='btn' onClick={addColor1} > blue  </button>  
    <button className='btn' onClick={addColor2} > green  </button>  
    <button className='btn' onClick={addColor3} > red  </button>  
    <button className='btn' onClick={addColor4} >  brown  </button>  
    </div>

   
    {color && (
        <div className='maindiv' style={{ backgroundColor: color }}>
          
        </div>
      )}
       

     
    </>
  )
}

export default App
