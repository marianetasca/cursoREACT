import {useState} from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h1>pessoas:</h1>
        <ul>
            <li>nome: {nome}</li>
            <li>idade: {idade}</li>
            <li>profissao: {profissao}</li>
            {idade >= 18 ? 'pode dirigir' : 'nao pode dirigir'}
        </ul>
    </div>
  )
}

export default UserDetails