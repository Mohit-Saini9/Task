// import { useState } from "react";
import "./App.css";
import Data from "./componenet/Api.js";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Task from "./components/Task";

function App() {
  // const [page, setPage] = useState("home");
  // const [mode, setMode] = useState("light");

  return (
    <>
      {/* <Navbar setPage={setPage} mode={mode} setMode={setMode} />

      {page === "task" && <Task />}
      {page === "home" && <Home />} */}
      <Data />
    </>
  );
}

export default App;
