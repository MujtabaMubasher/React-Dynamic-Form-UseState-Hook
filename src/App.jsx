import { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import Contactus from './components/ContactUs/Contactus'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Contactus/>
    </>
  )
}

export default App
