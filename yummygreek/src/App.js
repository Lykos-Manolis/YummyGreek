// Hooks
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Home from './pages/Home';
import Order from './pages/Order';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/customStyle.css';

// Context Hook
export const OrderContext = React.createContext();

function App() {
  const [orderedDishes, setOrderedDishes] = useState([])


  return (
    <div className="App">
			{/* Provide context for cart to children */}
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
