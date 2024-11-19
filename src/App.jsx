import { BrowserRouter as Router } from "react-router-dom"
import Home from "./Pages/Home/Home"
function App() {

  return (
    <>
    <Router>
    <div>
        <div className="w-full min-h-screen bg-black">
          <Home/>
        </div>
      </div>
    </Router>

    </>
  )
}

export default App
