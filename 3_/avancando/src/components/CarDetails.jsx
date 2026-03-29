import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h2>detralhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>este carro é novo</p>}
    </div>
  )
}

export default CarDetails