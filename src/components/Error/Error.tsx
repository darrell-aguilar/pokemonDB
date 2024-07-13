import "./Error.scss"

export function Error() {
  const pokeBall = require("../../images/pokeball-large.png")

  return (
    <div className="error">
      <div className="error_header">
        <h1>SORRY</h1>
      </div>
      <div className="error_text">
        <div>4</div>
        <div className="error_image">
          <img className="error_pokeball" alt="pokeball" src={pokeBall}></img>
        </div>
        <div>4</div>
      </div>
      <div className="error_subheader">
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  )
}
