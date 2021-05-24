import {Link} from 'react-router-dom'
import {search} from '../reducers/search'
import {connect} from 'react-redux'

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
    resetPokemonFilter: (emptyString) => {dispatch({type:search, payload: emptyString})}
  }
}

  export default connect(null, mapDispatchToProps)(Nav);