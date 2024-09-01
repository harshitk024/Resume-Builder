import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/nav";
import Body from "./components/main";
import Resume from "./components/resume";
import "./styles/app.css"
import { useState } from "react";

const App = () => {

  const [generalInfo,setGeneralInfo] = useState({

    "name" : "",
    "email" : "",
    "phone" : "",
    "address" : ""
  })

const [eduInfo,setEduInfo] = useState({

    "college" : "",
    "degree" : "",
    "duration" : "",
    "location" : ""
  })

const [expInfo,setExpInfo] = useState({

    "company" : "",
    "position" : "",
    "duration" : "",
    "location" : "",
    "description" : "",
  })
  

   return (
     <div id = "app">
      <Navbar />
      <div id = "main">
      <Body data = {[generalInfo,eduInfo,expInfo]} handlers = {[setGeneralInfo,setEduInfo,setExpInfo]}/>
      <Resume data = {[generalInfo,eduInfo,expInfo]}/>
      </div>
     </div>
   )
}

export default App;