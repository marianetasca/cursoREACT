const Challenge = () => {
    let a = 10;
    let b = 5;

    return (
        <div>
            <h1>{a} + {b}</h1>
            <button onClick={() => console.log(a+b)}>Calcular</button>
        </div>
    )
}

export default Challenge;