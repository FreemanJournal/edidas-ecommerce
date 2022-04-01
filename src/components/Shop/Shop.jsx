import React from 'react';
import { Button } from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { removeLocalStore } from '../../utilities/localStorage/localStorage';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ShopItems from './ShopItems';

export default function Shop() {
    const [orderedItems, setOrderedItems, updatingProducts, data] = useProducts()
    // const [addItemHandler,removeItemHandler,clearCartHandler] = useItemHandler(orderedItems,setOrderedItems,updatingProducts)
    let navigate = useNavigate()

    function addItemHandler(item) {

        if (!!orderedItems.find(fProduct => fProduct.id === item.id)) {
            setOrderedItems(prev => prev.map(pro => pro.id === item.id ? { ...pro, ...(pro.quantity += 1) } : pro))
        } else {
            updatingProducts(item, 1)
        }
    }

    function removeItemHandler(id) {
        setOrderedItems(prev => prev.map(item => item.id === id ? prev.splice(prev.indexOf(item), 1) : item))
    }
    function clearCartHandler() {
        setOrderedItems([])
        removeLocalStore('productKey')
    }

    return (
        <div style={{ position: 'relative' }}>
            <ShopItems addItemHandler={addItemHandler} removeItemHandler={removeItemHandler} data={data} />
            <ShoppingCart orderedItems={orderedItems} clearCartHandler={clearCartHandler}>
                <Button variant="success" onClick={() => navigate('/order-preview')}>Order Preview <FaAngleRight/></Button>
            </ShoppingCart>
        </div>
    )
}
