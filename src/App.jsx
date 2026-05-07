import { useState } from 'react'
import './App.css'
import { format } from "date-fns"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <p>{format(new Date(), "yyyy-MM-dd HH:mm:ss")}</p>
    </>
  )
}

export default App
