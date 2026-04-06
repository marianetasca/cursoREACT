import { useState } from "react";

const Contador2 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");
  const [history, setHistory] = useState([0]);

  const numberInt = Number(number);
  const passo = numberInt > 0 ? numberInt : 1;

  const incrementar = () => {
    setCount((prev) => {
      const valorNovo = prev + passo;
      setHistory((prevHistory) => [...prevHistory, valorNovo]);
      return valorNovo;
    });
  };

  const decrementar = () => {
    setCount((prev) => {
      let valorNovo;
      if (prev - passo >= 0) {
        valorNovo = prev - passo;
      } else {
        valorNovo = 0;
      }
      setHistory((prevHistory) => [...prevHistory, valorNovo]);
                // valor atual de history ... pega tudo que ja existe e adiciona mais um
      return valorNovo;
    });
  };

  const reset = () => {
    setCount(0);
    setHistory((prev) => [...prev, 0]);
  };

  const handleDelete = (index) => {
    setHistory((prevHistory) => prevHistory.filter((_, i) => i !== index)); // cria um array sem o item clicado
  };

  return (
    <div>
      <h1>Contador</h1>
      <label>
        Deseja incrementar ou decrementar em quanto?
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <h1> {count}</h1>
      <div>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar} disabled={count === 0}>
          -
        </button>
        <button onClick={reset}>reset</button>
      </div>
      <h2>Historico</h2>
      <ul>
        {history.map((valor, i) => (
          <li key={i}>
            {valor}
            <button onClick={() => handleDelete(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contador2;
