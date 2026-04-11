import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <div>
        <Navbar />
        <h1>Context</h1>
        <Outlet />
      </div>
    </>
  );
}

export default App;
