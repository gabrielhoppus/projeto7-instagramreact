import { useState } from "react";

export default function Posts(){
    const post = [
        {   
            usuario: "meowed",
            imagem: "./assets/img/meowed.svg",
            conteudo: "./assets/img/gato-telefone.svg",
            curtido: "./assets/img/respondeai.svg",
            info: "respondeai",
            numero: 101523
        },
        {
            usuario: "barked",
            imagem: "./assets/img/barked.svg",
            conteudo: "./assets/img/dog.svg",
            curtido: "./assets/img/adorable_animals.svg",
            info: "adorable_animals",
            numero: 99159
        }
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
        
    );
}

function Post(props){

    const defaultIcon = "bookmark-outline";
    const markedIcon = "bookmark";
    const noLike = "heart-outline";
    const yesLike = "heart";
    const [icon, setIcon] = useState(defaultIcon);
    const [like, setLike] = useState(noLike);
    const [likes, setLikes] = useState(props.numero);

    function savePost(){
        if (icon === defaultIcon){
            setIcon(markedIcon);
        }else{
            setIcon(defaultIcon);
        }  
    }

    function likeToggle(){
        if (like === noLike){
            setLike(yesLike);
            setLikes(likes+1);
        }else{
            setLike(noLike);
            setLikes(likes-1);
        }
    }

    function likePost(){
    if (like === noLike){
        setLike(yesLike);
        setLikes(likes+1);
        }else{
            return;
        }
    }

    return (
        <div data-test="post" class="post">
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
                <img data-test="post-image" onClick={likePost} src={props.conteudo} />
            </div>    
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={likeToggle} name={like ? like : noLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={savePost} name={icon ? icon : defaultIcon}></ion-icon>
                    </div>
                </div>    
                <div class="curtidas">
                    <img src={props.curtido} />
                    <div class="texto">
                        Curtido por <strong>{props.info}</strong> e <strong data-test="likes-number">outras {likes.toLocaleString("pt-br")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}