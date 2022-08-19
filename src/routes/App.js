import { useState } from "react";
import tipsyRules from "../rules/tipsy.json";
import { Wrapper } from "../components/Wrapper";
import { Sponsor } from "../components/Sponsor";

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
      <div className="text-white text-center grow flex flex-col">
        <Sponsor />
        <div className="m-auto">
          <h2 className="text-4xl font-semibold">
            {rule.name}
          </h2>
          <p className="text-lg mt-4 w-3/4 mx-auto font-thin">
            {rule.description}
          </p>
        </div>
      </div>
      <div className="mb-24 text-center">
        <button 
          onClick={() => next()} 
          className="bg-amber-300 rounded shadow-md shadow-emerald-900 text-xl font-extrabold text-emerald-800 w-3/4 py-6">
          Next Rule
        </button>
      </div>
    </Wrapper>
  );
}
