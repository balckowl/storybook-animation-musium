import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SvgLine from './components/Text/SvgLine/SvgLine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SvgLine />
    </>
  )
}

export default App
