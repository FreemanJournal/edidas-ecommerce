
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";

export default function ShoppingCart({orderedItems,children,clearCartHandler}) {

    function totalCal(properties) {
        if (properties === 'price') {
            return orderedItems?.reduce((acc, item) => acc += item?.total(), 0)
        }
        return orderedItems?.reduce((acc, item) => acc += item[properties], 0)
    }


    let TAX = (totalCal('price') * .2)

    const DELIVERY_CHARGE = totalCal('price') ? totalCal('shipping') : 0;

    return (
        <div className="shoppingCart" >
            <Card className="p-3 h-100">
                <Card.Body>
                    <Card.Title>Shopping Cart</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='fw-bolder'>Selected Items :  {orderedItems.length}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder'>Total Items :  {totalCal('quantity')}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder'>Total Price : $ {totalCal('price')}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder '>Delivery Charge : $ {DELIVERY_CHARGE}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder'>Tax : $ {TAX.toFixed(0)}</ListGroup.Item>
                        <ListGroup.Item className='fw-bolder list-group-item-warning'>You have to pay : $ {(totalCal('price') + DELIVERY_CHARGE + TAX).toFixed(0)}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>

                {children}

                <Button variant="warning" className='mt-3' onClick={clearCartHandler}>Clear cart <FaTrash className='ms-1 text-danger' style={{fontSize:"13px"}}/></Button>
                
            </Card>
        </div>
    )
}
