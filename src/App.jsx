import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputTodo from './components/InputTodo'
import Login from './components/Login'
import Footer from './components/Footer'
import ListTodo from './components/ListTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListTodo />
    </>
  )
}

export default App
