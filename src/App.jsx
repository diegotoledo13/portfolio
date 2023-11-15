import Header from "./components/Header"
import Menu from "./components/Menu"
import Main from "./components/Main"
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Header/>
      <Menu modal={modal}
            setModal={setModal}/>
      <Main/>
    </>
  )
}

export default App
