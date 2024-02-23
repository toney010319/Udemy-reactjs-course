import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import StartRating from './components/StartRating'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRating maxRating={5} />
    <StartRating maxRating={10} />
    <StartRating />
  </React.StrictMode>,
)
