import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import "./styles/shop.css";
function App() {
  return (
    <div style={{ backgroundColor: '#E5E5E5',position:'relative'}}>
      <Header/>
  
      <Shop />
    
    </div>
  );
}

export default App;
