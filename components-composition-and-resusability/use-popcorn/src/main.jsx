import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import StartRating from './components/StartRating'
import StarRatingFlexibility from './Component-flexibility/StarRatingFlexibility'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRating
      maxRating={5}
      size="24"
      messages={["Terrible", "Bad", "Okay", "Good", "Amzaing"]}
    />

    <StartRating
      defaultRating={3}
      color="red"
      messages={["Terrible", "Bad", "Okay", "Good", "Amzaing"]}
    />

    <StarRatingFlexibility />
  </React.StrictMode>,
)
