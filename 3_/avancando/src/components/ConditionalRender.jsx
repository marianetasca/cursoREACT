import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState('mateus');

  return (
    <div>
      <h1>isso sera exibido?</h1>
      {x && <p>Se x for true, sim</p>}
      {name === 'joao' ? (
        <div>
          <p>o nome é joao</p>
        </div>
      ) : (
        <div>
          <p>nome nao encontrado</p>
        </div>
      )}
      <button onClick={() => setName('joao')}>clique aqui</button>
    </div>
  )
}

export default ConditionalRender