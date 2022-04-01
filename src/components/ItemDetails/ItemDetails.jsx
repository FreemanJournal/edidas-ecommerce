import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
  
  let {itemId} = useParams();



  return (

    <div>ItemDetails{itemId}</div>
  )
}
