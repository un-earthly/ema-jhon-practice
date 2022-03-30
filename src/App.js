import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Shop />}>Order</Route>
        <Route path='/order' element={<Shop />}>Order</Route>
        <Route path='/overeview' element={<Shop />}>Order Overview</Route>
        <Route path='/inventory' element={<Shop />}>Manage Inventory</Route>
      </Routes>

    </div>
  );
}

export default App;
