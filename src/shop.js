import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom"

function Shop() {

useEffect (()=>{
  fetchItems();
},[])


const [Items,setitems] = useState([]);



const fetchItems = async () =>{
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/store/get`)
      const items = await data.json();
      // console.log("===========",items.data)
      setitems(items.data)
};

  return (
    <div >
        <h1>I am Shop page</h1>    
        { Items.map((Item,index)=>{
          // console.log(Item.itemId)
          return(
            
            <h1 key={index}>
              <Link to={`/Shop/${Item.itemId}`}>{Item.item.name}</Link>
              </h1>
            // console.log(Item.item)
          )
        })}
    </div>
  );
}

export default Shop;
