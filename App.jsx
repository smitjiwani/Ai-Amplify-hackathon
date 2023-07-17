import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header/>

      <Login/>
    <Footer/>


    </>
  )
}

export default App
