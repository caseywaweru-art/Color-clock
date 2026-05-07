import { useState } from 'react'
import './App.css'
import { format } from "date-fns"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <p>{format(new Date(), "'Today is a' eeee")}</p>
    </>
  )
}

export default App
