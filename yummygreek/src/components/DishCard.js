// DishCard.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import DishDetails from './DishDetails';

const DishCard = ({ dish }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card style={{ width: '18rem', display: 'inline-flex', margin: '1rem'}}>
    <DishDetails show={show} close={handleClose} dish={dish}/>
    <Card.Img variant="top" src={dish.image} />
    <Card.Body>
      <Card.Title>{dish.name} - {dish.price}&euro;</Card.Title>
      <Card.Text>
        {dish.description.substr(0,100) + '...'}
      </Card.Text>
      <Button variant="secondary" onClick={handleShow} style={{margin: '1rem'}}>Details</Button>
      <Button variant="primary" style={{margin: '1rem'}}>Order</Button>
    </Card.Body>
  </Card>
  );
};

export default DishCard;