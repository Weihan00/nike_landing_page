import React from 'react'

const ProductDetail = ({imgURL, name}) => {
  return (
    <div>
        <h2>This is {name}</h2>
        <img src={imgURL} alt="" />
        
    </div>
  )
}

export default ProductDetail