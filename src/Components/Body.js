import React, { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import {Suspense } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';
import { withPromotedLabel } from './ResturantCard';

const ResturantCard = React.lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import('./ResturantCard')), 0);
  })
);
const WithVegLabel=withPromotedLabel(ResturantCard);
//import ResturantCard from "./ResturantCard";
//import resObj from "./utils/mockdata";
const Body=()=>{
  console.log("this is Body");
  const[list,setList]=useState([]);
  const[searchText,setSeach]=useState("");
  const[filteredResturants,setFiltereRes]=useState([]);
  console.log(list,"count")
  useEffect(()=>{
    fetchData();
    console.log("this is useEffect");
  },[]);
 
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const json=await data.json();
   setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFiltereRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const filterTopRated = () => {
    const filteredList = filteredResturants.filter((restaurant) => restaurant.info.avgRating > 4);
    setFiltereRes(filteredList);
    console.log(filteredList);
};
const searchedData=()=>{
  const filteredResturants=list.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                console.log(filteredResturants);
                setFiltereRes(filteredResturants);
               
}
const onlineStatus=useOnlineStatus();
if(onlineStatus===false) return <h1>please check your internet connection</h1>
   // return list.length===0 ? <Shimmer/>:(
      return(
        
        <div className="body">
            <div className="filter flex">
            <div className='search p-4 m-4'>
              <input type="text" className='border border-solid border-black'
              value={searchText}
              onChange={(e)=>setSeach(e.target.value)}
              />
              <button className='px-6 py-2 bg-green-100 m-2 rounded-lg' onClick={()=>{searchedData()
              }}>Search</button>
            </div >
            <div className='flex items-center'> <button className='px-6 py-2 bg-gray-100 m-2 rounded-lg' onClick={filterTopRated}>Top Rated</button></div>
         
            </div>
            <div className="res-container flex flex-wrap items-center justify-center">
            <Suspense fallback={<Shimmer/>}>
              {
                filteredResturants.map((resturants,index)=>(
                  <Link key={resturants.info.id} to={"/resturants/"+resturants.info.id}>
                    {resturants.info.veg ? 
                    (<WithVegLabel restData={resturants}/>):( <ResturantCard restData={resturants}/> )
                    }
                    
                  </Link>
                ))

              }
               </Suspense>
               
            </div>

        </div>
    )
}
export default Body;