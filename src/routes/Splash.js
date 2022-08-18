import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export function Splash() {
  return (
    <div>
      <Header />
      <div>
        <Link to="/play">Start Game</Link> &nbsp; 
      </div>
      <div>
        <Link to="/about">About Party Jenga</Link>
      </div>
    </div>
  )
}

