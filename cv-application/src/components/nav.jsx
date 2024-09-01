import logo from "../assets/cv.png"

export default function Navbar(){
     return(
      <div  id = "nav-container">
        <ul className="nav flex-column">
          <li className = "nav-item">
            <div id = "logo-info">
            <img src = {logo} alt = "logo" width={100} height={100}/>
            <p className = "text-muted" id = "logo-header">CV Builder</p>
            </div>
          </li>
          <li className = "nav-item">
  
          </li>
        </ul>
      </div>
     )
}