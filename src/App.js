import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Order from './Components/Order/Order';
import Overview from './Components/Overview/Overview';
import Shop from './Components/Shop/Shop';
import Error from './Components/Error/Error.js';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/order' element={<Order />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
