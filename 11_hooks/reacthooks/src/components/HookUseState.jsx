import { useState } from "react";
const HookUseState = () => {
  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault()
    // envio a uma API
    console.log(age)
  }

  return (
    <div>
      {/* 2 - usestate e input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>voce tem {age} anos</p>
    </div>
  );
};

export default HookUseState;
