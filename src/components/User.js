import { useState } from "react";
import React from 'react'

export default function User(){
    const user = {
        image: "assets/img/catanacomics.svg",
        name: "Catana",
        tag: "catanacomics"
    }

    return (
        <div data-test="user" class="usuario">
            <Users name={user.name} image={user.image} tag={user.tag}/>
        </div>
    );
}

function Users(props){
    
    const [name, setName] = useState(props.name);
    const [image, setImage] = useState(props.image);


    function changeName(){
        setName(prompt("Qual é o seu novo nome?"));
    }

    function changeImage(){
        setImage(prompt("Qual é o link para a nova imagem?"));
    }

    return (
        <React.Fragment>
        <img data-test="profile-image" onClick={changeImage} src= {image ? image : props.image} />
        <div class="texto">
            <strong>{props.tag}</strong>
            <span data-test="name">
                {name ? name : props.name}
                <ion-icon data-test="edit-name" onClick={changeName} name="pencil"></ion-icon>
            </span>
        </div>
        </React.Fragment>
    )
}
