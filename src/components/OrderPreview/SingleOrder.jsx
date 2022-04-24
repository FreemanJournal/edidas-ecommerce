import React from 'react'
import { Stack } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa';
import useProducts from '../../hooks/useProducts';

export default function SingleOrder({item,removeItemHandler}) {

    const {  _id, name, price, img, shipping, total,quantity } = item
    return (
        <Stack className="p-2 mx-3 bg-light singleOrder" gap={3} direction='horizontal'>
            <div className="img" style={{ width: "100px" }}><img src={img} alt="" className='img-fluid img-thumbnail' /></div>
            <div className="itemDes lh-lg">
                <h6 className='m-0'>{name}</h6>
                <p className='fw-bold m-0'>Price: <span className='text-success'>${price}</span></p>
                <p className='m-0'>Shipping: ${shipping}</p>
                <p className='m-0'>Quantity: {quantity}</p>
            </div>
            <div className="delIcon ms-auto mb-auto text-danger" role="button" onClick={()=>removeItemHandler(_id)}> <FaTrash title='Delete this item'/></div>

        </Stack>
    )
}
