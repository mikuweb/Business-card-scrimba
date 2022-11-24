import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
    <img className='picture' src='./images/me_flower.JPG'></img>
     <h1 className='myname'>Miku Kawata</h1>
    </div>
  )
}

export default App
