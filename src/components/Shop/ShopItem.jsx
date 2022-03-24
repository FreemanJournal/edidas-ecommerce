import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import ReactStarsRating from 'react-awesome-stars-rating';
import { addToLocalStore, removeFromLocalStore } from '../../utilities/localStorage/localStorage';

export default function ShopItem({ item, addItemHandler, removeItemHandler }) {
    const [count, setCount] = useState(0);
    const { id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping } = item

    const onRatingChange = (value) => {
        // console.log(`React Stars Rating value is ${value}`);
    };

    function addItemToCart(item) {
        setCount(prev => ++prev)
        addItemHandler(item)
        addToLocalStore(id)
    }
    function removeItemFromCart(item) {
        setCount(prev => --prev)
        removeItemHandler(item)
        removeFromLocalStore(id)
    }

    return (
        <Card className="p-3" key={id}>
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

            <Button variant="danger" disabled={count === 0 ? true : false} onClick={() => removeItemFromCart(item)}>Remove from  cart</Button>
        </Card>
    )
}
