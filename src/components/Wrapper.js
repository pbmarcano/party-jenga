import { Header } from "../components/Header";

export function Wrapper(props) {
  return ( 
    <div className="container bg-emerald-800 mx-auto px-1 flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col grow">
        {props.children}
      </main>
    </div>
  )
}
