import { Wrapper } from "../components/Wrapper";
import { Link } from "react-router-dom";

export function Splash() {
  return (
    <Wrapper>
      <div className="prose marker:prose-ol:text-amber-400 prose-a:text-amber-400 text-white flex grow">
        <div className="m-auto px-4">
          <p><a href="https://justbeerapp.com/article/drunk-jenga-drinking-game-what-is-it-and-what-are-the-rules">Drunk Jenga</a> is fun.</p> 
          <p>But writing drinking rules on the family Janga set is trashy.</p>
          <p>Thus, Party Jenga.</p>
          <ol>
            <li>Set up your tower</li>
            <li>Remove a block</li>
            <li>Follow the next rule</li>
          </ol>
          <p>Repeat steps 2 and 3 until the tower falls.</p>
          <p>Enjoy!</p>
        </div>
      </div>
      <div className="mb-24 text-center">
        <Link 
          to="/play" 
          className="bg-amber-300 rounded shadow-md shadow-emerald-900 text-xl font-extrabold text-emerald-800 w-3/4 py-6 inline-block active:translate-y-1">
          Start Game
        </Link>
      </div>
    </Wrapper>
  )
}

