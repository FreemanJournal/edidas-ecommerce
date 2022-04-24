import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useItemHandler from '../../hooks/useItemHandler';
import useProducts from '../../hooks/useProducts';
import ShopItem from './ShopItem';

export default function ShopItems({ addItemHandler, removeItemHandler,updatingProducts }) {
  
    const [page, setPage] = useState(0);
    const [productPerLoad, setProductPerLoad] = useState(10);
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0)


    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${productPerLoad}`)
            .then(response => response.json())
            .then(data => {
                setData(data?.products)
                setPageCount(Math.ceil(data?.count / productPerLoad))
            })
    }, [page, productPerLoad])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localStoreCollection = JSON.parse(localStorage.getItem('productKey'))
            for (const id in localStoreCollection) {
                const localData = data?.filter(item => item._id === id)
                localData.map(item => updatingProducts(item, localStoreCollection[id]))
            }
        }

    }, [data])

    return (
        <div className='  my-5 p-4' style={{ marginRight: "20rem" }}>
            <div className="" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1em' }}>
                {
                    data?.map((item, index) => <ShopItem key={index} item={item} addItemHandler={addItemHandler} removeItemHandler={removeItemHandler} />)
                }
            </div>
            <div className="pagination flex gap-2 my-5 justify-content-center ">
                {
                    [...Array(pageCount).keys()].map(number => {
                        return (
                            <Button variant={`${page === number ? 'secondary' : 'outline-secondary'}`} className={``} key={number} onClick={() => setPage(number)} >{number}</Button>
                        )
                    })

                }
                <select name="" id="" defaultValue="10" onChange={(e) => setProductPerLoad(+e.target.value)}>
                    <option value="5" >5</option>
                    <option value="10" >10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
        </div>
    )
}
