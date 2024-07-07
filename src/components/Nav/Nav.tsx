import { Link, useLocation } from "react-router-dom"
import "./Nav.scss"

export function Nav() {
  const logo = require("../../images/pokemon_logo.png")
  const location = useLocation()

  const handleClick = () => {
    if (location.pathname === "/") window.location.reload()
  }

  return (
    <div className="nav">
      <div className="nav__icon">
        <Link to="/">
          <img id="logo" alt="PoKemon" src={logo} onClick={handleClick}></img>
        </Link>
      </div>
    </div>
  )
}
