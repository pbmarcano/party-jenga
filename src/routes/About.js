import { Wrapper } from "../components/Wrapper";

export function About() {
  return (
    <Wrapper>
      <div className="container prose prose-sm prose-h1:text-amber-400 text-amber-300">
        <p>Drunk Jenga is fun.</p> 

        <p>But taking a sharpie to my family Janga set is trashy.</p>

        <p>Thus, Party Jenga. A simple website to turn up any party with a Jenga set.</p>

        <ol>
          <li>Erect your tower</li>
          <li>Fire up party Jenga</li>
          <li>After every pulled brick tap “next rule”</li>
        </ol>

        <p>Enjoy.</p>

        <p>P.S. If you enjoy this game and want to say thanks, you can buy me a beer.</p>
      </div>
    </Wrapper>
  )
}

