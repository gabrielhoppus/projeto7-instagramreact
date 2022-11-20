export default function Suggestions(){
    const sugestao = [
        {usuario: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg"},
        {usuario: "chibirdart", imagem: "assets/img/chibirdart.svg"},
        {usuario: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg"},
        {usuario: "adorable_animals", imagem: "assets/img/adorable_animals.svg"},
        {usuario: "smallcutecats", imagem: "assets/img/smallcutecats.svg"},
    ]

    return (
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestao.map((suggestion) => <Suggestion usuario={suggestion.usuario} imagem={suggestion.imagem}/>)}
            </div>
    );
}

function Suggestion(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.usuario}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}
