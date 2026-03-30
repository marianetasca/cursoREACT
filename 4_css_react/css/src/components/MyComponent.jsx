import React from 'react'
import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
        <h1>CSS de componente</h1>
        <p>este é um paragrafo do componente</p>
        <p className="my-comp-paragraph">este tambem é do componente</p>
    </div>
  )
}

export default MyComponent