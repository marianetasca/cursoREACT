const TemplateExpressions = () => {
    const name = "mateus"
    const data = {
        age: 54,
        job: "dev"
    };

    return(
        <div>
            <h1>ola {name}, tudo bem?</h1>
            <p>voce atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("teste")}</p>
        </div>
    )
}

export default TemplateExpressions