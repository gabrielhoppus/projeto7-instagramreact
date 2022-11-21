export default function Suggestions(){
    const sugestao = [
        {usuario: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg"},
        {usuario: "chibirdart", imagem: "assets/img/chibirdart.svg"},
        {usuario: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg"},
        {usuario: "adorable_animals", imagem: "assets/img/adorable_animals.svg"},
        {usuario: "smallcutecats", imagem: "assets/img/smallcutecats.svg"},
    ]

    return (
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestao.map((suggestion) => <Suggestion key={suggestion.usuario} usuario={suggestion.usuario} imagem={suggestion.imagem}/>)}
            </div>
    );
}

function Suggestion(props){
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagem} />
                <div className="texto">
                    <div className="nome">{props.usuario}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );
}
