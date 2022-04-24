import React, { useState } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { addToLocalStore, removeFromLocalStore } from '../../utilities/localStorage/localStorage';

export default function ShopItem({ item, addItemHandler, removeItemHandler }) {
    const [count, setCount] = useState(0);
    let navigate = useNavigate()

    const {  _id, category, name, seller, price, stock, ratings,quantity, ratingsCount, img, shipping } = item
    
    

    const onRatingChange = (value) => {
        // console.log(`React Stars Rating value is ${value}`);
    };

    function addItemToCart(item) {
        setCount(prev => ++prev)
        addItemHandler(item)
        addToLocalStore(_id)
    }
    function removeItemFromCart() {
        setCount(prev => --prev)
        removeItemHandler(_id)
        removeFromLocalStore(_id)
    }

    function loadDetailsHandler(){
        navigate(`/order-preview/${_id}`)

    }

    

    return (
        <Card className="p-3" key={_id}>
            <Card.Img variant="top" src={img} style={{ userSelect: "none" }} />
            <Card.Body style={{ userSelect: "none" }}>
                <Card.Title>{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item className='fw-bolder'>Price : $ {price}</ListGroup.Item>
                    <ListGroup.Item>Brand : {seller}</ListGroup.Item>
                    <ListGroup.Item>Rating : <ReactStarsRating onChange={onRatingChange} value={ratings} /></ListGroup.Item>
                    <ListGroup.Item>Rating Count : {ratingsCount}</ListGroup.Item>
                </ListGroup>
            </Card.Body>

            <Button variant="warning" className='mb-3' onClick={() => addItemToCart(item)}>Add to cart</Button>
            <Button variant="danger" className='mb-3' disabled={count === 0 ? true : false} onClick={() => removeItemFromCart()}>Remove from  cart</Button>
            <Button variant="success" className='mb-3' onClick={loadDetailsHandler}>Details</Button>
           
           
        </Card>
    )
}
