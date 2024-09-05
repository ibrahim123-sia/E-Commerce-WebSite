import './CSS/ShopCategory.css'
import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown.png'
import Items from '../Components/Items/Items'
const ShopCategory = (props) => {
  
  const {all_products}=useContext(ShopContext)
  return (
    
    <div className='shop-category'>
          <img src={props.banner} alt="" className='shopcategory-banner'/>
      <div className="shopcategory-indexsort">
          <p><span>Showing 1-12</span> out of 36 </p>

        <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" /> 
        </div>
      </div>
      <div className="shopcategory-products">

        {all_products.map((item,i)=>{
          if(props.category==item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.image}
              new_price={item.new_price} old_price={item.old_price}/>            
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
