import "./App.css";
import { useState } from "react";

// 4- custom hook
import { useFetch } from "./hooks/useFetch";
import Contador from "./components/Contador";
import Contador2 from "./components/Contador2";

const url = "http://localhost:3000/products";

function App() {
  // const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url); // renomeando

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", //cria um json em string
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - carregamento dinamico
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName(""); // para limpar os inputs
    setPrice("");
  };

  const handleDelete = (id) => {
    httpConfig(id, "DELETE")
  };

  return (
    <>
      <div className="App">
        <h1>Lista de produtos</h1>
        {/* 6 - loading*/}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!loading && (
          <ul>
            {items &&
              items.map(
                (
                  product, // validaocao / vem do hook/ do data renomeado item
                ) => (
                  <li key={product.id}>
                    {product.name} - R$: {product.price}
                    <button onClick={() => handleDelete(product.id)}>Deletar</button>
                  </li>
                ),
              )}
          </ul>
        )}

        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Preço:
              <input
                type="number"
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>

            {/* 7 - state de loading no post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
          </form>
        </div>

        {/* <Contador /> <br /><br /><br /> */}
        <Contador2 />
      </div>
    </>
  );
}

export default App;
