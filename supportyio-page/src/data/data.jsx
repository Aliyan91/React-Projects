import { createContext } from "react";

export const Services=createContext({
   data:[]
});


export default function ListProvider({children}){
    const data=[
        {
      
            id:Math.floor(Math.random() * 11),
            image:"images/1.jpg",
            title:"AIDA Framework",
            body:"Impress potential employers with compelling job application emails that standout from the competiton.",
        
        },
        {
            id:Math.floor(Math.random() * 11),
            image:"images/2.png",
            title:"To-Do List ",
            body:"Impress potential employers with compelling job application emails that standout from the competiton.",
        },
        {
      
            id:Math.floor(Math.random() * 11),
            image:"images/1.jpg",
            title:"AIDA Framework",
            body:"Impress potential employers with compelling job application emails that standout from the competiton.",
        
        },
        {
      
            id:Math.floor(Math.random() * 11),
            image:"images/2.png",
            title:"AIDA Framework",
            body:"Impress potential employers with compelling job application emails that standout from the competiton.",
        
        },
        {
      
            id:Math.floor(Math.random() * 11),
            image:"images/1.jpg",
            title:"AIDA Framework",
            body:"Impress potential employers with compelling job application emails that standout from th competiton.",
        
        },
    ]
    return <Services.Provider value={{ 
        data,
    }   
    }>{children}</Services.Provider>
}
