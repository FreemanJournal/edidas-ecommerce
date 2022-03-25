import React, { useEffect, useState } from 'react';
import { removeLocalStore } from '../../utilities/localStorage/localStorage';
import ShopItems from './ShopItems';
import ShoppingCart from './ShoppingCart';
export default function Shop() {
    const [data, setData] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);

  
    function updatingProducts(item, quantity) {
        item.quantity += quantity
        item.total = function () { return this.price * this.quantity }
        setOrderedItems(prev => [...prev, { ...item }])
    }


    useEffect(() => {
        fetch('/fakeData/products.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localStoreCollection = JSON.parse(localStorage.getItem('productKey'))
            for (const id in localStoreCollection) {
                const localData = data?.filter(item => item.id === id)
                localData.map(item=>updatingProducts(item,localStoreCollection[id]))
            }
        }

    }, [data])




    function addItemHandler(item) {

        if (!!orderedItems.find(fProduct => fProduct.id === item.id)) {
            setOrderedItems(prev => prev.map(pro => pro.id === item.id ? { ...pro, ...(pro.quantity += 1) } : pro))
        } else {
            updatingProducts(item,1)
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
            <ShoppingCart orderedItems={orderedItems} clearCartHandler={clearCartHandler}/>
        </div>
    )
}
