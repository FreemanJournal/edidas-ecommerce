import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import { removeFromLocalStore, removeLocalStore } from '../../utilities/localStorage/localStorage'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import SingleOrder from './SingleOrder'
import { FaAngleLeft, FaTrash } from "react-icons/fa"
export default function OrderPreview() {
  const [orderedItems, setOrderedItems] = useState([]);
  let storageId = [];
  let localStoreCollection = {}

  if (typeof window !== 'undefined') {
    localStoreCollection = JSON.parse(localStorage.getItem('productKey'))
    if (localStoreCollection) {
      storageId = Object.keys(localStoreCollection)
    }
  }

  useEffect(() => {
    const uri = `http://localhost:5000/productById`
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(storageId)
    }).then(res => res.json())
      .then(result => {
        for (const key in localStoreCollection) {
          result.map(item => item._id === key && updatingProducts(item, localStoreCollection[key]))
        }
      })
  }, [])


  function updatingProducts(item, quantity) {
    item.quantity += quantity
    item.total = function () { return this.price * this.quantity }
    setOrderedItems(prev => prev.concat({...item}))
  }

  let navigate = useNavigate()

  function removeItemHandler(id) {
    setOrderedItems(prev => prev.map(item => item._id === id ? prev.splice(prev.indexOf(item), 1) : item))
    removeFromLocalStore(id)
  }
  function clearCartHandler() {
    setOrderedItems([])
    removeLocalStore('productKey')
  }
  return (
    <>
      <Container>
        <Row style={{ height: "92vh", width: "50vw" }} className="mx-auto mt-4">

          <Stack gap={2} className="mt-5" style={{ height: "70vh", overflow: "scroll", overflowX: "hidden" }}>
            {
              orderedItems.map((item, index) => <SingleOrder key={index} item={item} removeItemHandler={removeItemHandler} />)
            }

          </Stack>
          <ShoppingCart orderedItems={orderedItems} clearCartHandler={clearCartHandler} >
            <Button variant="success" onClick={() => navigate('/')}> Proceed to checkout</Button>
            <Button className='mt-3' variant="success" onClick={() => navigate('/')}><FaAngleLeft /> Shop Again</Button>
          </ShoppingCart>
        </Row>
      </Container>

      <Outlet />
    </>
  )
}
