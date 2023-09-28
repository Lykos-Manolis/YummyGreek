// Hooks
import React, { useContext } from 'react';
import { OrderContext } from '../App';
import { useState } from 'react';

// Components
import Card from 'react-bootstrap/Card';
import DishDetails from './DishDetails';

// Bootstrap Components
import Button from 'react-bootstrap/Button';

// Render dish cards
const DishCard = ({ dish }) => {
  // Hook for ordered dishes
  const {orderedDishes, setOrderedDishes} = useContext(OrderContext)

  // Hooks for dish modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const addToCart = () => {
    console.log(orderedDishes);
    let orders = orderedDishes;
    orders.push({'name': dish.name, 'price':dish.price});
    setOrderedDishes(orders);
    console.log(orderedDishes);
  }

  return (
    // Dish card
    <Card style={{ width: '18rem', display: 'inline-flex', margin: '1rem'}}>
      {/* Dish modal */}
      <DishDetails show={show} close={handleClose} dish={dish}/>
      {/* Dish card content */}
      <Card.Img variant="top" src={dish.image} />
      <Card.Body>
        <Card.Title>{dish.name} - {dish.price}&euro;</Card.Title>
        <Card.Text>
          {/* Show 100 character for each description in preview */}
          {dish.description.substr(0,100) + '...'}
        </Card.Text>
        <Button variant="secondary" onClick={handleShow} style={{margin: '1rem'}}>Details</Button>
        <Button onClick={addToCart} variant="primary" style={{margin: '1rem'}}>Order</Button>
      </Card.Body>
    </Card>
  );
};

export default DishCard;