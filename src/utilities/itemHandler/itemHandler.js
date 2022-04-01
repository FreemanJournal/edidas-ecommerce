import React from 'react'
import useProducts from '../../hooks/useProducts'
import { removeLocalStore } from '../localStorage/localStorage'


 function clearCartHandler({setOrderedItems}) {
    setOrderedItems([])
    removeLocalStore('productKey')
  
}


export {clearCartHandler}