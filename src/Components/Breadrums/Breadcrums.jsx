import React from 'react'
import './Breadcrums.css'
import arrow from '../Assets/arrow.png'
const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow} alt="" />SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums
