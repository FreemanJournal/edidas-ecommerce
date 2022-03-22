import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import ReactStarsRating from 'react-awesome-stars-rating';
export default function Shop() {
    const [data, setData] = useState([]);
    const onChange = (value) => {
        // console.log(`React Stars Rating value is ${value}`);
    };
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='container mx-auto my-5 p-4'>
            <div className="" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1em'}}>
                {
                    data?.map(item => {
                        const { id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping } = item
                        return (
                            <Card className="p-3" style={{ width: '18rem' }} key={id}>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className='fw-bolder'>Price : $ {price}</ListGroup.Item>
                                        <ListGroup.Item>Brand : {seller}</ListGroup.Item>
                                        <ListGroup.Item>Rating : <ReactStarsRating onChange={onChange} value={ratings} /></ListGroup.Item>
                                        <ListGroup.Item>Rating Count : {ratingsCount}</ListGroup.Item>
                                    </ListGroup>


                                </Card.Body>
                                <Button variant="warning" >Add to cart</Button>
                            </Card>

                        )
                    })
                }
            </div>

        </div>
    )
}
