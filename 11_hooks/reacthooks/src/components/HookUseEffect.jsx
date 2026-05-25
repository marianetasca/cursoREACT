import { useEffect, useState } from "react";
const HookUseEffect = () => {
  // useeffect sem dependencias
  useEffect(() => {
    console.log("estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };
  // array de deps vazio
  useEffect(() => {
    console.log("serei executado apenas uma vez");
  }, []);

  //   item no array de dep
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("sou executado apenas quando o another number muda");
    }
  }, [anotherNumber]);

  //   cleanup do useeffect
  useEffect(() => {
    const timer = setTimeout(() =>
    {console.log("hello world")}, 2000)
  
  return () => clearTimeout(timer)

}, [anotherNumber]);

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>executar</button>
      <p>another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        mudar anothernumber
      </button>
    </div>
  );
};

export default HookUseEffect;
