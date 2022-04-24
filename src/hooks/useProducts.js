import React, { useEffect, useState } from 'react'

export default function useProducts() {
    const [data, setData] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);
    const [pageCount, setPageCount] = useState(0)

    function updatingProducts(item, quantity) {
        item.quantity += quantity
        item.total = function () { return this.price * this.quantity }
        setOrderedItems(prev => [...prev, { ...item }])
    }

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(response => response.json())
            .then(data => {
                setData(data?.products)
            })
    }, [])

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const localStoreCollection = JSON.parse(localStorage.getItem('productKey'))
    //         for (const id in localStoreCollection) {
    //             const localData = data?.filter(item => item._id === id)
    //             localData.map(item => updatingProducts(item, localStoreCollection[id]))
    //         }
    //     }

    // }, [data])

    return [orderedItems, setOrderedItems, updatingProducts, data, pageCount]
}
