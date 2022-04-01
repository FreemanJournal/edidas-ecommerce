import React from 'react'
import { removeLocalStore } from '../utilities/localStorage/localStorage'
import useProducts from './useProducts'

export default function useClearCart({setOrderedItems}) {
    
    function clearCartHandler() {
        setOrderedItems([])
        removeLocalStore('productKey')
    }
    return [clearCartHandler]
}
