import { Link, useLocation } from "react-router-dom"
import "./Nav.css"

export function Nav() {
  const logo = require("../../images/pokemon_logo.png")
  const location = useLocation()

  const handleClick = () => {
    if (location.pathname === "/") window.location.reload()
  }

  return (
    <div className="navBar">
      <div className="navItems">
        <Link to="/">
          <img id="logo" alt="PoKemon" src={logo} onClick={handleClick}></img>
        </Link>
      </div>
    </div>
  )
}
