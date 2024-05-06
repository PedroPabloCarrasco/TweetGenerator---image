import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TweetCard from './components/TweetCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h3>Tweet</h3>
      <TweetCard/>

    </div>
  )
}

export default App
