import { useState } from "react"
import tipsyRules from "../rules/tipsy.json"
import { Wrapper } from "../components/Wrapper"
import { Sponsor } from "../components/Sponsor"
import { Transition } from "@headlessui/react"

export function App() {
  const [rule, setRule] = useState(randomRule())
  const [isShowing, setIsShowing] = useState(true)

  function randomRule() {
    const index = Math.floor(Math.random() * tipsyRules.length)
    return tipsyRules[index]
  }

  function next() {
    setIsShowing(false)
    setTimeout(() => {
      setRule(randomRule())
      setIsShowing(true)
    }, 200)
  }

  return (
    <Wrapper>
      <div className="text-white text-center grow flex flex-col">
        <Sponsor />
        <div className="m-auto">
          <Transition show={isShowing}>
            <Transition.Child
              enter="transition ease-in-out duration-75"
              enterFrom="scale-75 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="transition ease-in-out duration-75"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-75 opacity-0"
            >
              <h2 className="text-4xl font-semibold">
                {rule.name}
              </h2>
            </Transition.Child>
            <Transition.Child
              enter="transition ease-in-out duration-75"
              enterFrom="translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition ease-in-out duration-75"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-full opacity-0"
            >
              <p className="text-lg mt-4 w-3/4 mx-auto font-thin">
                {rule.description}
              </p>
            </Transition.Child>
          </Transition>
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
  )
}
