import './App.css';
import Post from './components/Card';
import Headerbuttons from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const items={
    id:Date(),
    image:"",
    title:"AIDA Framework",
    body:"Impress potential employers with compelling job application emails that standout from th competiton."
  }
  return (
    <>
      <div className='container' >
        <Headerbuttons></Headerbuttons>
      </div>
      <div className='container-fluid' style={{marginLeft:"50px",marginTop:"0px"}}>
        <div className='d-flex' style={{flexWrap:"wrap"}}>
          <Post items={items}></Post>
          
        </div>
        
      </div>
    </>
    
    
  );
}

export default App;
