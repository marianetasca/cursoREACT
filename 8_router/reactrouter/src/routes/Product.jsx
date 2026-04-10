import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Outlet } from "react-router-dom"

const Product = () => {
  // rota dinamica
  const { id } = useParams(); // esta puxando do main :id

  //   5 - carregmento dado individual
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <div>
      <p>Id do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          {/* NESTED route */}
<Link to={`/products/${product.id}/info`}>Mais informações</Link>        </div>
     )}    

    </div>
  );
};

export default Product;
