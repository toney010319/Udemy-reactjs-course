import { useState } from "react"
import Card from "./Card"




function App() {
  const [step, setstep] = useState(1)
  return (

    <Card step={step} setStep={setstep} />

  )
}

export default App
