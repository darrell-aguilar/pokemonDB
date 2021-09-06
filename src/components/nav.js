import { Link, useLocation } from "react-router-dom";
import { SEARCH } from "../reducers/Search";
import { connect } from "react-redux";
import "../css/Nav.css";
import logo from "../images/pokemon_logo.png";

function Nav(props) {
  const location = useLocation();
  
  const handleClick = () => {
    props.resetPokemonFilter("");
    if (location.pathname === '/') window.location.reload();
  };

  return (
    <div className="navBar">
      <div className="navItems">
        <Link to="/">
          <img id="logo" alt="PoKemon" src={logo} onClick={handleClick}></img>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPokemonFilter: (emptyString) => {
      dispatch({ type: SEARCH, payload: emptyString });
    }
  };
};

export default connect(null, mapDispatchToProps)(Nav);
