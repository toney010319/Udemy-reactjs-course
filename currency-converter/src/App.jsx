
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("USD")
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const convert = async () => {
      if (fromCurrency === toCurrency) return setOutput(amount)
      setIsLoading(true)
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      const data = await res.json()
      setOutput(data.rates[toCurrency])
      setIsLoading(false)
    }

    convert()


  }, [amount, fromCurrency, toCurrency])


  return (
    <>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={isLoading}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>{output} {toCurrency}</p>
      </div>
    </>
  )
}

export default App
