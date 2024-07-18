import { Link, useLocation } from "react-router-dom"
import "./Nav.scss"
import { useEffect } from "react"

export function Nav() {
  const logo = require("../../images/pokemon_logo.png")
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleClick = () => {
    if (pathname === "/") window.location.reload()
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
