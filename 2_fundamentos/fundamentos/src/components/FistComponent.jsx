import MyComponent from "./MyComponent";

// arquivos de estilo
const FirstComponent = () => {
    // essa funcao faz isso
    return (
        <div>
            {/* comentario */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">teste</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;