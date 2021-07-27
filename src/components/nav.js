import {Link} from 'react-router-dom'
import {SEARCH} from '../reducers/Search'
import {connect} from 'react-redux'
import '../css/Nav.css'

function Nav(props) {

  const handleClick = () => {
    props.resetPokemonFilter('')
  }

    return (
          <div className="navBar">
            <ul className="navItems">
              <Link to="/">
                <li onClick={handleClick}>Home</li>
              </Link>
                <li><a href="#/">Pokemon</a></li>
                <li><a href="#/">Abilities</a></li>
                <li><a href="#/">About</a></li>
            </ul>
          </div> 
      )
  }

const mapDispatchToProps = (dispatch) => {
  return {
    resetPokemonFilter: (emptyString) => {dispatch({type:SEARCH, payload: emptyString})}
  }
}

  export default connect(null, mapDispatchToProps)(Nav);