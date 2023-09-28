// Hooks
import React, { useContext } from 'react';
import { OrderContext } from '../App';

// Render bill
function Bill() {
  // Hook for ordered dishes
  const {orderedDishes, setOrderedDishes} = useContext(OrderContext);

  return (
    <div>
      <h1 style={{margin: '3rem'}}>Your Order</h1>
      <div className='bill-container'>
        <div className='bill-content'>
          <h3>Ordered Dishes</h3>
          <hr/>
          {/* Show name and price for each dish ordered */}
          {orderedDishes.map((dish) => (
            <div className='ordered-dish'>
              <p className='ordered-dish-price'>{dish.price}&euro;</p>
              <p>{dish.name}</p>
            </div>
          ))}
          <hr/>
          {/* Show bill total */}
          <p>Total = {orderedDishes.reduce((a,v)=>a=a+v.price,0)}&euro;</p>
          <hr/>
          
        </div>
        {/* Bill background */}
        <svg width="100%" viewBox="0 0 1314 2230" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L47.7371 31.0981C68.6403 44.7154 95.6097 44.7154 116.513 31.0981L164.25 0L211.987 31.0981C232.89 44.7154 259.86 44.7154 280.763 31.0981L328.5 0L376.237 31.0981C397.14 44.7154 424.11 44.7154 445.013 31.0981L492.75 0L540.487 31.0981C561.39 44.7154 588.36 44.7154 609.263 31.0981L657 0L704.737 31.0981C725.64 44.7154 752.61 44.7154 773.513 31.0981L821.25 0L868.987 31.0981C889.89 44.7154 916.86 44.7154 937.763 31.0981L985.5 0L1033.24 31.0981C1054.14 44.7154 1081.11 44.7154 1102.01 31.0981L1149.75 0L1197.49 31.0981C1218.39 44.7154 1245.36 44.7154 1266.26 31.0981L1314 0V2230H0V0Z" fill="#D9D9D9"/>
        </svg>
      </div>
    </div>
  )
}

export default Bill