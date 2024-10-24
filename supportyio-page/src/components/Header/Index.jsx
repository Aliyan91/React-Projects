import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Headerbuttons() {

    const [selected, setselected] = useState("Template");

    return (
        <div className="container d-flex gap-2 justify-content-center pt-5">
            <div className="responsive">
                
                <button className={`button2 rounded-pill px-3 m-2 ${selected === 'Template' && "selected"}`} onClick={() => setselected("Template")}><Link to="/" style={{color:"black",textDecoration:"none"}}>All Templates</Link></button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Education' && "selected"}`} type="button" onClick={() => setselected("Education")}><Link to="/blank" style={{color:"black",textDecoration:"none"}}>Education</Link></button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Support' && "selected"}`} type="button" onClick={() => setselected("Support")}><Link to="/blank" style={{color:"black",textDecoration:"none"}}>Support</Link></button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Email' && "selected"}`} type="button" onClick={() => setselected("Email")}><Link to="/blank" style={{color:"black",textDecoration:"none"}}>Email</Link></button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Language' && "selected"}`} type="button" onClick={() => setselected("Language")}><Link to="/blank" style={{color:"black",textDecoration:"none"}}>Language</Link></button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Writing Content' && "selected"}`} type="button" onClick={() => setselected("Writing Content")}><Link to="/blank" style={{color:"black",textDecoration:"none"}}>Writing Content</Link></button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Other' && "selected"}`} type="button" onClick={() => setselected("Other")}><Link to="/blank" style={{color:"black",textDecoration:"none"}}>Other</Link></button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Favourites' && "selected"}`} type="button" onClick={() => setselected("Favourites")}><Link to="/blank" style={{color:"black",textDecoration:"none"}}>Favourites</Link></button>
            </div>
        </div>
    )
};
