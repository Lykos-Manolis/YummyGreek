import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

function DishDetails(props) {
    let ingredients = props.dish.ingredients.map((value) => (
        <Badge bg="secondary">{value}</Badge>
    ));

    return (
    <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft: 'auto'}}>{props.dish.name} - {props.dish.price}&euro;</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
            display: 'grid',
            textAlign: 'center',
            justifyItems: 'center',
            gridGap: '2rem'
        }}>
            <Image src={props.dish.image} rounded/>
            {props.dish.description}
        </Modal.Body>
        <Modal.Footer>
            {ingredients}
        </Modal.Footer>
      </Modal>
  )
}

export default DishDetails