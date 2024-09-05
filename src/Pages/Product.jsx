import React, { useContext } from 'react'
import './CSS/Product.css'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadrums/Breadcrums';
import {ShopContext} from '../Context/ShopContext'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
const Product = () => {
  const {all_products}=useContext(ShopContext);
  const {productId}=useParams();
  const product =all_products.find((e)=> e.id===Number(productId));
  return (
    <div className='product'>
      <Breadcrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
