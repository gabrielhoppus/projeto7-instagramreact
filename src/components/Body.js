import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Posts from "./Posts";



export default function Body(){
    return(
        <div className="corpo">
            <div className="esquerda">
                <Stories/>
                <Posts/>
            </div>
            <Sidebar/>
        </div>
    );
}