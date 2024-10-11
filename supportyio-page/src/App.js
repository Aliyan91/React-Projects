import './App.css';
import Post from './components/Card';
import Headerbuttons from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className='container' >
        <Headerbuttons></Headerbuttons>
      </div>
      <div className='container-fluid' style={{marginLeft:"50px"}}>
        <div className='d-flex' style={{flexWrap:"wrap"}}>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          
        </div>
        
      </div>
    </>
    
    
  );
}

export default App;
