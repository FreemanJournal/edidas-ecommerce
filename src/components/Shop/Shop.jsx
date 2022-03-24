import React, { useEffect, useState } from 'react';
import { removeLocalStore } from '../../utilities/localStorage/localStorage';
import ShopItems from './ShopItems';
import ShoppingCart from './ShoppingCart';
export default function Shop() {
    const [data, setData] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);

    // console.log(orderedItems);



    useEffect(() => {
        fetch('/fakeData/products.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // setOrderedItems()
            const localStoreCollection = JSON.parse(localStorage.getItem('productKey'))
            const localStoreKeys = localStoreCollection?.map(item => Object.keys(item))?.flat()
            const localData = data?.filter(item => localStoreKeys?.includes(item.id))
            setOrderedItems(localData)
        }

    }, [data])




    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         localStorage.setItem('orderItems', JSON.stringify(orderedItems))
    //     }
    // }, [orderedItems])



    function addItemHandler(item) {

        if (!!orderedItems.find(fProduct => fProduct.id === item.id)) {
            setOrderedItems(prev => prev.map(product => product.id === item.id ? { ...product, ...(++product.quantity) } : product))
        } else {
            setOrderedItems(prev => [...prev, { ...item, ...(++item.quantity, item.total = function(){ return this.price * this.quantity})}])

        }


    }

    function removeItemHandler(item) {
        const clickedItemIndex = orderedItems.indexOf(item)
        if (clickedItemIndex !== -1) {
            orderedItems.splice(clickedItemIndex, 1)
            setOrderedItems([...orderedItems])
        }
    }
    function clearCartHandler() {
        setOrderedItems([])
        removeLocalStore('productKey')
    }

    return (
        <div style={{ position: 'relative' }}>
            <ShopItems addItemHandler={addItemHandler} removeItemHandler={removeItemHandler} data={data} />
            <ShoppingCart orderedItems={orderedItems} clearCartHandler={clearCartHandler} />
        </div>
    )
}
