import {useLayoutEffect, useState, useEffect} from "react";

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("algum nome")

    useEffect(() => {
        console.log("2")
        setName("mudou de novo")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("outro nome")
    }, [])
  return (
    <div>
      <h2>HookUseLayoutEffect</h2>
      <p>nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
