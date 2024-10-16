import { CDN_URL } from "./utils/constants";
const ResturantCard=(props)=>{
    const {restData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=restData?.info
   
     return(
         <div className="resto-card m-4 p-4 w-[280px] h-[30rem] bg-gray-100 hover:bg-gray-200" >
             <img alt="food" className="res-logo rounded-lg w-[100%] h-[200px]"
             src={CDN_URL+cloudinaryImageId}/>
 
             <h3 className="font-bold py-2">{name}</h3>
             <p className="py-2">{cuisines.join(", ")}</p>
             <p>{avgRating}</p>
             <p>{costForTwo}</p>
             <p>{restData.info.sla.deliveryTime} mins</p>
 
         </div>
     )
 }
//promoted flag is not coming in rest so i have used veg flag here
 export const withPromotedLabel=(ResturantCard)=>{
     return(props)=>{
        //const {restData}=props.info;
        
         return(
             <div>
                 <label className="absolute bg-green-600 text-white">Pure Veg</label>
                 <ResturantCard {...props} />
             </div>
         )
     }
 }
 export default ResturantCard;