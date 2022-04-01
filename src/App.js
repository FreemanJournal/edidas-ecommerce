import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing/Routing';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import "./styles/shop.css";
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div style={{ backgroundColor: '#E5E5E5', position: 'relative' }}>
      <Header />
      <Routing />
      <Outlet />
    </div>
  );
}

export default App;
