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
            <div className="posts">
                {post.map((posts) =>
                    <Post key={posts.imagem}
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
    const defaultImageLike = ""
    const noLike = "heart-outline";
    const yesLike = "heart";
    const imageLike = "heart"
    const [icon, setIcon] = useState(defaultIcon);
    const [like, setLike] = useState(noLike);
    const [likes, setLikes] = useState(props.numero);
    const [animation, setAnimation] = useState(defaultImageLike)

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
        setAnimation(imageLike)
        }else{
            return;
        }
    }

    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>    
            <div onDoubleClick={likePost} className="conteudo">
                <img data-test="post-image" src={props.conteudo} />
                <ion-icon name={animation ? animation : defaultImageLike}></ion-icon>
            </div>    
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={likeToggle} name={like ? like : noLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={savePost} name={icon ? icon : defaultIcon}></ion-icon>
                    </div>
                </div>    
                <div className="curtidas">
                    <img src={props.curtido} />
                    <div className="texto">
                        Curtido por <strong>{props.info}</strong> e <strong data-test="likes-number">outras {likes.toLocaleString("pt-br")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}