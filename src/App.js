import './App.css';
import { useState } from "react";

function App() {
  const rules = [
    {
      name: "Give 1",
      description: "Make someone drink."
    },
    {
      name: "Give 2",
      description: "Give two drinks"
    },
    {
      name: "Give 3",
      description: "Give three drinks to whomever you choose"
    },
    {
      name: "Take 1",
      description: "Drink. Take one for the team."
    },
    {
      name: "Take 2",
      description: "Drink twice. It will help speed along the game."
    },
    {
      name: "Take 3",
      description: "Drink three times. You've earned it."
    },
    {
      name: "Putsies Backsies",
      description: "Good job removing that block! Now put it back where you found it."
    },
    {
      name: "Question Master",
      description: "You're the Question Master! Ask any question you want. If someone answers it, they have to drink."
    },
    {
      name: "Beep Beep I'm a Jeep",
      description: "Every time you walk away from the game you must get on all fours and say \"beep beep, I'm a Jeep\". Drink if you forget."
    }
  ];

  const [rule, setRule] = useState(randomRule());

  function randomRule() {
    const index = Math.floor(Math.random() * rules.length);
    return rules[index];
  }

  function next() {
    setRule(randomRule());
  }

  return (
    <div className="container mx-auto flex flex-col bg-emerald-900 min-h-screen">
      <header className="py-3 px-4 text-xl text-amber-300">
        <h1>Party Jenga</h1>
      </header>
      <main className="text-white text-center grow flex flex-col">
        <h2 className="text-4xl mt-36">{rule.name}</h2>
        <p className="text-lg mt-24 w-3/4 mx-auto">
          {rule.description}
        </p>
        <div className="mb-12 absolute inset-x-0 bottom-0 h-16">
          <button onClick={() => next()} className="bg-amber-300 text-xl font-extrabold text-emerald-900 w-3/4 py-6">
            Next Rule
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
