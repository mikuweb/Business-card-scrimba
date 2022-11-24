import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from './components/Button'
import { Contents } from './components/Contents'
import { Links } from './components/Links'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
    <img className='picture' src='./images/me_flower.JPG'></img>
     <h1 className='myname'>Miku Kawata</h1>
     <p className='occupation'>Frontend Developer</p>
     <div className='website__center'><a className='website' href='#'>Miku.website</a></div>
     <div className='btns'>
      <Button 
      imgSrc="./images/Icon.png">
      Email
      </Button>
      <Button 
      imgSrc="./images/Vector.png">
      LinkedIn
      </Button>
    </div>

    <Contents
      title="About"
      content="I am a frontend developer
      with a particular interest in making things simple 
      and automating daily tasks.
      I am always looking for new things to learn."
      />
      <Contents
      title="Interests"
      content="Love piano, traveling, reading, traveling, learning, flowers, cheese, making latte art, and dogs."
      />

      <Links />
     </div>
  )
}

export default App
