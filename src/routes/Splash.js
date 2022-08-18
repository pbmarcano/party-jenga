import { Wrapper } from "../components/Wrapper";
import { Link } from "react-router-dom";

export function Splash() {
  return (
    <Wrapper>
      <div>
        <Link to="/play">Start Game</Link> &nbsp; 
      </div>
      <div>
        <Link to="/about">About Party Jenga</Link>
      </div>
    </Wrapper>
  )
}

