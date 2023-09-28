import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import DishList from './components/DishList.js';
import Home from './pages/Home';
import Order from './pages/Order';
import './assets/customStyle.css';

export const OrderContext = React.createContext();

function App() {
  const [orderedDishes, setOrderedDishes] = useState([])

  return (
    <div className="App">
      <OrderContext.Provider value={{orderedDishes,setOrderedDishes}}>
        <Router>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/order" element={<Order/>} />
          </Routes>
        </Router>  
      </OrderContext.Provider>
    </div>
  );
}

export default App;
