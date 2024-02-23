import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(step - 1)
  console.log(count, "count")

  const baseDate = new Date(2024, 1, 16)
  baseDate.setDate(baseDate.getDate() + count)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(baseDate);


  const handleAddCount = () => {
    setCount((c) => c + step)
  }

  const handleMinusCount = () => {
    setCount((c) => c - step)
  }

  const handleAddStep = () => {
    setStep((c) => c + 1)
  }
  const handleMinusStep = () => {
    setStep((c) => c - 1)
  }
  return (
    <>
      <div>
        <Button onClick={handleAddStep} text="+" className='bg-gray-400 border-2 border-black text-white px-3 rounded-md' />
        <span>Step:{step}</span>
        <Button onClick={handleMinusStep} text="-" className='bg-gray-400 border-2 border-black text-white px-3 rounded-md' />
      </div>
      <div>
        <Button onClick={handleAddCount} text="+" className='bg-gray-400 border-2 border-black text-white px-3 rounded-md' />
        <span>Count:{count}</span>
        <Button onClick={handleMinusCount} text="-" className='bg-gray-400 border-2 border-black text-white px-3 rounded-md' />
      </div>
      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${count * -1} days ago was `}</span>
        <span>{formattedDate}</span>
      </p>
    </>
  )
}

export default App
