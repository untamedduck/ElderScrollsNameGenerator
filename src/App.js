import React from "react"
import Navbar from "./Components/Navbar";
import ElderScrolls from "./Pages/ElderScrolls";
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className= "App">
      <Router>
      <Navbar/>
      <Routes>
          <Route path = "/" exact element = {<ElderScrolls/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
