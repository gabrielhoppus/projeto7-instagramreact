export default function Posts(){
    const post = [
        {usuario: "meowed", imagem: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtido: "assets/img/respondeai.svg", info: "respondeai", numero: "101.523"},
        {usuario: "barked", imagem: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtido: "assets/img/adorable_animals.svg", info: "adorable_animals", numero: "99.159"}

    ]

    return (
            <div class="posts">
                {post.map((posts) => 
                    <Post 
                        usuario={posts.usuario} 
                        imagem={posts.imagem} 
                        conteudo={posts.conteudo} 
                        curtido={posts.curtido}
                        info={posts.info}
                        numero={posts.numero}/>
                        )}
            </div>
        
    )
}

function Post(props){
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>    
            <div class="conteudo">
                <img src={props.conteudo} />
            </div>    
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>    
                <div class="curtidas">
                    <img src={props.curtido} />
                    <div class="texto">
                        Curtido por <strong>{props.info}</strong> e <strong>outras {props.numero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}