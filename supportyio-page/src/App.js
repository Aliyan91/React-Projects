import './App.css';
import Headerbuttons from './components/Header/Index';
import "bootstrap/dist/css/bootstrap.min.css";
import ListProvider from './data/data';
import { Outlet } from 'react-router-dom';

function App() {
  
 
  return (
    <ListProvider>
      <div className='container' >
        <Headerbuttons></Headerbuttons>
      </div>
      <Outlet></Outlet>
    </ListProvider>
    
    
  );
}

export default App;
