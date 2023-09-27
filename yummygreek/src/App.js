import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import DishList from './components/DishList.js';
import Home from './pages/Home';
import Order from './pages/Order';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/details" element={<Details/>} />
        </Routes>
    </Router>
    
    </div>
  );
}

export default App;
