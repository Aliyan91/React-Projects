import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Card";
import { useContext } from "react";
import { Services } from "../data/data";

export default function List() {

    const {data}=useContext(Services)

    
    return (
        <div className='container' style={{ marginLeft: "50px"}}>
            <div className='d-flex' style={{ flexWrap: "wrap" }}>
                {data.map((data)=>(
                    <Post key={data.id} post={data}></Post>
                ))}

            </div>
        </div>
    )
}