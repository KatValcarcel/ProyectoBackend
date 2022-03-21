import "./App.css";
import React, { Fragment, useEffect } from "react"
import { getServerInfo } from "./services/user.service";

function App() {
  useEffect(() => {
    async function funcion() {
      const data = await getServerInfo()
      console.log(data);
    }
    funcion()
  }, [])

  return <Fragment>
    <div className="App">Holi</div>
  </Fragment>;
}

export default App;
