import './App.css';
import Post from './components/Card';
import Headerbuttons from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import ListProvider from './data/data';
import List from './components/Cardlist';

function App() {
  
 
  return (
    <ListProvider>
      <div className='container' >
        <Headerbuttons></Headerbuttons>
      </div>
      <List></List>
    </ListProvider>
    
    
  );
}

export default App;
