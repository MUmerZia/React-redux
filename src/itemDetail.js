import React,{useState,useEffect} from 'react';

 function ItemDetail({match}) {
    useEffect (()=>{
        fetchItem();
        console.log("match---->>",match)
      },[])
      
      
      const [Item,setitem] = useState({});
      
      
      
      const fetchItem = async () =>{
          console.log('++++++++++',match.params.id)
          const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
            const item = await data.json();
            console.log("===========>>>",item)
            setitem(item)

      };
    
        return (
            <div>
                {Item.location}
            </div>
        );
    }

export default ItemDetail;
