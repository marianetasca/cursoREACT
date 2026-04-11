import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useContext(CounterContext);
  const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>home</h1>
      <p>Valor do contador: {counter}</p>
      {/* alterando valor contexto */}
    </div>
  );
};

export default About;
