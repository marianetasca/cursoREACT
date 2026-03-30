import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { id: 1, brand: "ferrari", color: "amarela", newCar: true, km: 0 },
    { id: 2, brand: "jaguar", color: "preto", newCar: false, km: 12550 },
    { id: 3, brand: "ford", color: "vermelho", newCar: true, km: 0 },
  ];

  return (
    <>
      <h2>Carros</h2>
      <div className="car-container">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
      </div>
    </>
  );
}

export default App;
