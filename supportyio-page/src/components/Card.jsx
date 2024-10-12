import "bootstrap/dist/css/bootstrap.min.css";
import { FcAutomatic } from "react-icons/fc";
import "./Card.css";

export default function Post({items}) {
    return (
        <div className="card m-2" style={{width: "18rem"}}>
            <div className="card-body">
                <div className="d-flex mb-2" style={{flexWrap:"wrap"}}>
                    <FcAutomatic className="m-1 icon"></FcAutomatic>
                    <p className="header">{items.title}</p>
                </div>
                <p className="card-text">{items.body}</p>
            </div>
        </div>       
    )
}