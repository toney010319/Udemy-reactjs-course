import { content } from "./Content"
import Tabbed from "./Tabbed"
import "./App.css"

function App() {


  return (
    <>
      <div>
        <Tabbed content={content} />
      </div>
    </>
  )
}

export default App
