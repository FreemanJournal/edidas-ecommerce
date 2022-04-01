import React from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import { removeFromLocalStore, removeLocalStore } from '../../utilities/localStorage/localStorage'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import SingleOrder from './SingleOrder'
import { FaAngleLeft, FaTrash } from "react-icons/fa"
export default function OrderPreview() {
  const [orderedItems, setOrderedItems, updatingProducts, data] = useProducts()
  let navigate = useNavigate()

  function removeItemHandler(id) {
    setOrderedItems(prev => prev.map(item => item.id === id ? prev.splice(prev.indexOf(item), 1) : item))
    removeFromLocalStore(id)
  }
  function clearCartHandler() {
    setOrderedItems([])
    removeLocalStore('productKey')
  }
  return (
    <>
      <Container>
        <Row style={{ height: "92vh",width:"50vw"}} className="mx-auto mt-4">

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
