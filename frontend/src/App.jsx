import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Main } from './Pages/Main'

import { Home } from './Pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
  
  <div>
    <Main/>
  </div>
  )
}

export default App
