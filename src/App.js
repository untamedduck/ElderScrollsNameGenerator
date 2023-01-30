import React from "react"
import Navbar from "./Components/Navbar";
import ElderScrolls from "./Pages/ElderScrolls";
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Altmer from "./Pages/Altmer";
import Argonian from "./Pages/Argonian"
import Radio from "./Components/Radio";
import Bosmer from "./Pages/Bosmer";
import Breton from "./Pages/Breton";
import Dunmer from "./Pages/Dunmer";
import Imperial from "./Pages/Imperial";
import Khajiit from "./Pages/Khajiit"
import Nord from "./Pages/Nord"
import Orc from "./Pages/Orc";
import Redguard from "./Pages/Redguard";
function App() {
  return (
    <div className= "App">
      <Router>
      <Navbar/>
      <Routes>
          <Route path = "/" exact element = {<ElderScrolls/>}/>
          <Route path = "/Altmer" exact element = {<Altmer/>}/>
          <Route path = "/Argonian" exact element = {<Argonian/>}/>
          <Route path = "/Bosmer" exact element = {<Bosmer/>}/>
          <Route path = "/Breton" exact element = {<Breton/>}/>
          <Route path = "/Dunmer" exact element = {<Dunmer/>}/>
          <Route path = "/Imperial" exact element = {<Imperial/>}/>
          <Route path = "/Khajiit" exact element = {<Khajiit/>}/>
          <Route path = "/Nord" exact element = {<Nord/>}/>\
          <Route path = "/Orc" exact element = {<Orc/>}/>
          <Route path = "/Redguard" exact element = {<Redguard/>}/>


      </Routes>
      </Router>
    </div>
  );
}

export default App;
