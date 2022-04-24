import React from 'react'
import { removeLocalStore } from '../utilities/localStorage/localStorage'
import useProducts from './useProducts'

export default function useItemHandler({orderedItems,setOrderedItems,updatingProducts}) {
    
    // const [orderedItems,setOrderedItems,updatingProducts] = useProducts()
  

    function addItemHandler(item) {

        if (!!orderedItems.find(fProduct => fProduct._id === item._id)) {
            setOrderedItems(prev => prev.map(pro => pro._id === item._id ? { ...pro, ...(pro.quantity += 1) } : pro))
        } else {
            updatingProducts(item,1)
        }
    }

    function removeItemHandler(id) {
        setOrderedItems(prev => prev.map(item => item._id === id ? prev.splice(prev.indexOf(item), 1) : item))
    }
    function clearCartHandler() {
        setOrderedItems([])
        removeLocalStore('productKey')
    }
  return [addItemHandler,removeItemHandler,clearCartHandler,orderedItems]
}
