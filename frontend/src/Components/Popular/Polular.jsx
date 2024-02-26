import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'
import axios from 'axios';


const Polular = () => {
const [popularProducts,setPopularProduct] = useState([])

useEffect(() => {
  axios.get('http://localhost:4000/popularinwomen')
    .then(response => {
      setPopularProduct(response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching data:', error);
    });
}, []);


  return (
   <div className="Popular">
<h1>POPULAR IN WOMEN</h1>
<hr />
<div className="popular-item">
    {popularProducts.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
   </div>
  )
}

export default Polular