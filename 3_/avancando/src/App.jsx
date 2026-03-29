import { useState } from "react";
import "./App.css";

import Img from "./assets/img2.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageStage from "./components/ChangeMessageStage";
import UserDetails from "./components/UserDetails";

function App() {
  const name = "joaquim";
  const [userName] = useState("maria");

  const cars = [
    { id: 1, brand: "ferrari", color: "amarela", newCar: true, km: 0 },
    { id: 2, brand: "jaguar", color: "preto", newCar: false, km: 12550 },
    { id: 3, brand: "ford", color: "vermelho", newCar: true, km: 0 },
  ];

  function showMessage() {
    console.log("evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    { id: 1, nome: "maria", idade: 15, profissao: "estudante" },
    { id: 2, nome: "mariane", idade: 54, profissao: "engenheira" },
    { id: 3, nome: "joao", idade: 45, profissao: "pedreiro" },
  ];

  return (
    <>
      <h1>avancando</h1>
      <div>
        <div>
          <img src="/img1.jpg" alt="logo" />
        </div>

        <div>
          <img src={Img} alt="nitro" />
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={userName} />
        {/* destructuring */}
        <CarDetails brand="vw" km={10000} color="azul" newCar={false} />
        {/* reaproveitando */}
        <CarDetails brand="fiat" color="branco" km={45000} newCar={true} />
        <CarDetails brand="ford" color="branco" km={55000} newCar={false} />
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
        {/* fragments */}
        <Fragments propFragment="teste" />
        {/* children */}
        <Container myValue="testing">
          <p>e este é o conteudo</p>
        </Container>
        <Container myValue="testing2">
          <p>e este é o conteudo</p>
        </Container>
        {/* executar funcao */}
        <ExecuteFunction myFunction={showMessage} />
        {/* state lift */}
        <Message msg={message} />
        <ChangeMessageStage handleMessage={handleMessage} />

        {pessoas.map((pessoa) => (
          <UserDetails
            key={pessoa.id}
            nome={pessoa.nome}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))}
      </div>
    </>
  );
}

export default App;
