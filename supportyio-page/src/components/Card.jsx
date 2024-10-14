import "bootstrap/dist/css/bootstrap.min.css";
import { FcAutomatic } from "react-icons/fc";
import "./Card.css";

export default function Post({post}) {

    
    return (
        <div className="card m-2" style={{width: "16rem",boxSizing:"content-box"}}>
            <div className="card-body">
                <div className="d-flex mb-2" style={{flexWrap:"wrap"}}>
                    <FcAutomatic className=" m-1 icon"></FcAutomatic>
                    
                    <p className="header ">{post.title}</p>
                
                    
                </div>
                <p className="card-text text-body-secondary " style={{fontFamily:"unset"}}>{post.body}</p>
            </div>
        </div>       
    )
}