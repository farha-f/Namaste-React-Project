
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

import useResturantMenu from "./utils/useResturantMenu";
import ResturantCatergory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useResturantMenu(resId);
    const[showIndex,setShowIndex]=useState(0)
    
    const {
        name = '',
        cuisines = [],
        costForTwoMessage = ''
      } = resInfo?.cards[2]?.card?.card?.info || {};
      const { itemCards = [] } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
      console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR,"itemCard");
      const itemCategory=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      console.log(itemCategory,"itemCategory");

return (resInfo===null)?<Shimmer/>:(
    <div className="text-center my-10">
        <h1 className="font-bold my-2 text-2xl">{name}</h1>
        <p className="text-xl">{cuisines.join(' ')}-{costForTwoMessage}</p>
      {/* //showItem={true} */}
        {itemCategory.map((data,index)=>{
           return <ResturantCatergory 
           info={data?.card?.card}
            key={index} 
            showItem={index===showIndex?true:false} 
            setShowIndex={()=>setShowIndex(index)}

            />
        })}
        
    </div>
)
}
export default ResturantMenu