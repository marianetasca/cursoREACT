import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("maria");

  const redTitle = false;
  return (
    <>
      <div>
        {/* css global */}
        <h1>React com CSS</h1>
        {/* css de componente */}
        <MyComponent />
        <p>este paragrafo é do app.js</p>
        {/* inline CSS */}
        <p
          style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}
        >
          este elemento foi estilizado de forma inline
        </p>
        {/* CCS inline dinamico */}
        <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
          css dinamico
        </h2>
        <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
          css dinamico
        </h2>
        <h2 style={name === "mria" ? { color: "purple", background: "orange" } : null}>
          css dinamico
        </h2>
        {/* classe dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>este titulo vai ter classe dinamica</h2>
        {/* css modules */}
        <Title />
        <h2 className="my-title">testando</h2>
      </div>
    </>
  );
}

export default App;
