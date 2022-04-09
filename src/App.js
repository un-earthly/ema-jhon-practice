import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getAuth, signInWithPopup } from 'firebase/auth'
import About from './Components/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Order from './Components/Order/Order';
import Overview from './Components/Overview/Overview';
import Shop from './Components/Shop/Shop';
import app from './firebase.init'
const auth = getAuth(app);
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Shop />}>Order</Route>
        <Route path='/order' element={<Order />}>Order</Route>
        <Route path='/overview' element={<Overview />}>Order Overview</Route>
        <Route path='/inventory' element={<Inventory />}>Manage Inventory</Route>
        <Route path='/about' element={<About />}>Manage Inventory</Route>
      </Routes>

    </div>
  );
}

export default App;
