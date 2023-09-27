// DishCard.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DishCard = ({ dish }) => {
  return (
    <Card style={{ width: '18rem', display: 'inline-flex', margin: '1rem'}}>
    <Card.Img variant="top" src={dish.image} />
    <Card.Body>
      <Card.Title>{dish.name} - {dish.price}&euro;</Card.Title>
      <Card.Text>
        {dish.description}
      </Card.Text>
      <Button variant="primary">Order</Button>
    </Card.Body>
  </Card>
  );
};

export default DishCard;