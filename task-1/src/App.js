import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Task from "./components/Task";

function App() {
  const [page, setPage] = useState("home");
  const [mode, setMode] = useState("light");

  return (
    <>
      <Navbar setPage={setPage} mode={mode} setMode={setMode} />

      {page === "task" && <Task />}
      {page === "home" && <Home />}
    </>
  );
}

export default App;
