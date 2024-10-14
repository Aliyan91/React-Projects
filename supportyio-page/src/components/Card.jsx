import "bootstrap/dist/css/bootstrap.min.css";
import { FcAutomatic } from "react-icons/fc";
import "./Card.css";

export default function Post({post}) {

    
    return (
        <div className="card m-2" style={{width: "16rem",boxSizing:"content-box"}}>
            <div className="card-body">
                <div className="d-flex " style={{flexWrap:"wrap"}}>
                    <img src={post.image} className="image m-1 icon" ></img>
                    
                    <p className="header pt-3">{post.title}</p>
                    
                </div>
                <p className="card-text text-body-secondary " style={{fontFamily:"unset"}}>{post.body}</p>
            </div>
        </div>       
    )
}