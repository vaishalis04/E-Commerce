import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import axios from 'axios';



const NewCollections = () => {
  const[new_collections,setNewcollections]= useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/newcollections')
      .then(response => {
        setNewcollections(response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="new-collections">
<h1>NEW COLLECTIONS</h1>
<hr />
<div className="collections">
{new_collections.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

})}
</div>
    </div>
  )
}

export default NewCollections