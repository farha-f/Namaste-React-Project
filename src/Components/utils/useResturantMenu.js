import { useState,useEffect } from "react";
// import { MENU_URL } from "./utils/constants";
import { MENU_URL } from "./constants";
const useResturantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData=async()=>{
        //const data=await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const data=await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setResInfo(json.data)
    }
    return resInfo;

}
export default useResturantMenu;