import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="py-4 px-4 text-xl text-amber-300">
      <Link to="/">
        <h1>Party Jenga</h1>
      </Link>
    </header>
  )
}
