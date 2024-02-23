import { Link } from "react-router-dom"


const Category = () => {
  return (
    <div className="container">
        <div className="grid">
            <Link className="card" to="/play">Movies</Link>
            <Link className="card" to="/play">Tv Shows</Link>
            <Link className="card" to="/play">Countries</Link>
            <Link className="card" to="/play">Capital cities</Link>
            <Link className="card" to="/play">Animals</Link>
            <Link className="card" to="/play">Sport</Link>
            
        </div>
        
    </div>
  )
}

export default Category
