import { useState } from "react";

export default function User(){
    const user = {
        image: "assets/img/catanacomics.svg",
        name: "Catana",
        tag: "catanacomics"
    }

    const [name, setName] = useState(user.name)
    const [image, setImage] = useState(user.image)


    function changeName(){
        setName(prompt("Qual é o seu novo nome?"))
    }

    function changeImage(){
        setImage(prompt("Qual é o link para a nova imagem?"))
    }

    return (
        <div data-test="user" class="usuario">
            <img data-test="profile-image" onClick={changeImage} src= {image ? image : user.image} />
            <div class="texto">
                <strong>{user.tag}</strong>
                <span data-test="name">
                    {name ? name : user.name}
                    <ion-icon data-test="edit-name" onClick={changeName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}


