import { Link } from "react-router-dom";
import { SEARCH } from "../reducers/Search";
import { connect } from "react-redux";
import "../css/Nav.css";
import logo from "../images/pokemon_logo.png";

function Nav(props) {
  const handleClick = () => {
    props.resetPokemonFilter("");
  };

  return (
    <div className="navBar">
      <div className="navItems">
        <Link to="/">
          <img id="logo" src={logo} onClick={handleClick}></img>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPokemonFilter: (emptyString) => {
      dispatch({ type: SEARCH, payload: emptyString });
    },
  };
};

export default connect(null, mapDispatchToProps)(Nav);
