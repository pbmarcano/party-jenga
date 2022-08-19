import React from "react";

export function Sponsor() {
  return (
    <a href="https://www.buymeacoffee.com/marcano" target="_blank" rel="noreferrer" className="text-white mx-4 rounded-lg py-3 bg-emerald-900 flex items-center shadow-inner">
      <div className="mx-4 text-4xl">
        🍻
      </div>
      <div className="text-sm flex flex-col text-left">
        <p className="text-amber-500">Enjoying Party Jenga?</p>
        <p className="text-amber-600 text-xs mt-1">If you want to say thanks, buy me a beer!</p>
      </div>
    </a>
  )
}
