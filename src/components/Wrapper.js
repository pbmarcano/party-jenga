import { Header } from "../components/Header";

export function Wrapper(props) {
  return ( 
    <div className="container mx-auto flex flex-col min-h-screen">
      <Header />
      {props.children}
    </div>
  )
}
