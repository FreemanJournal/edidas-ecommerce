import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div style={{ backgroundColor: '#E5E5E5'}}>
      <Header/>
      <Shop/>
    
    </div>
  );
}

export default App;
