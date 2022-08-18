import { useState } from "react";
import tipsyRules from "../rules/tipsy.json";
import { Wrapper } from "../components/Wrapper";

export function App() {
  const [rule, setRule] = useState(randomRule());

  function randomRule() {
    const index = Math.floor(Math.random() * tipsyRules.length);
    return tipsyRules[index];
  }

  function next() {
    setRule(randomRule());
  }

  return (
    <Wrapper>
      <main className="text-white text-center grow flex flex-col">
        <h2 className="text-4xl mt-36">{rule.name}</h2>
        <p className="text-lg mt-24 w-3/4 mx-auto">
          {rule.description}
        </p>
        <div className="mb-24 absolute inset-x-0 bottom-0 h-16">
          <button onClick={() => next()} className="bg-amber-300 rounded shadow-md shadow-emerald-900 text-xl font-extrabold text-emerald-900 w-3/4 py-6">
            Next Rule
          </button>
        </div>
      </main>
    </Wrapper>
  );
}
