import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import ItemDetails from '../components/ItemDetails/ItemDetails'
import OrderPreview from '../components/OrderPreview/OrderPreview'

export default function Routing() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="order-preview" element={<OrderPreview />} >
                    <Route path=':itemId' element={<ItemDetails />} />
                </Route>
                {/* <Route path="item-details" element={} >
                    <Route path=':itemId' element={<ItemDetails />}/>
                </Route> */}

            </Routes>
        </div>
    )
}
