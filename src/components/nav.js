import {Link} from 'react-router-dom'

function Nav() {
    return (
          <div className="navBar">
            <ul className="navItems">
              <Link to="/">
                <li>Home</li>
              </Link>
                <li><a href="#/">Pokemon</a></li>
                <li><a href="#/">Abilities</a></li>
                <li><a href="#/">About</a></li>
            </ul>
          </div> 
      )
  }

  export default Nav;