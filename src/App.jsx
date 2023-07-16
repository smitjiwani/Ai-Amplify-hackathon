import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputTodo from './component/InputTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputTodo />
    </>
  )
}

export default App
