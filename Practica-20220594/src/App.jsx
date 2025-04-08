import {BrowserRouter as Router, Routes, Route} from "react-router"; 
import DragonBall from "./pages/DragonBall";
import Nav from "./components/nav";
import Home from "./pages/Home";


function App() {

  return (
  <>
    <Router>
      <Nav/>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/DragonBallZ" element = {<DragonBall/>} />
            
        </Routes>
    </Router>

  </>
  )
}

export default App
