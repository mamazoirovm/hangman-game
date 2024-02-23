
import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"
const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <img className="img-logo" src={Logo} alt="" />
        <button className="btn-play">

        </button>
       
        <Link to="/category" className="how-play"></Link>
      </div>
    </div>
  )
}

export default Home
