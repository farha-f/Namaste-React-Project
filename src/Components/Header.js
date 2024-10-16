import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import useOnlineStatus from "./utils/useOnlineStatus";

import { LOGO_URL } from "./utils/constants";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const[auth,setAuth]=useState(["Login"]);
    const data=useContext(UserContext);

    const onlineStatus=useOnlineStatus();
    const cartItem=useSelector((store)=>store.cart.items);
    console.group(cartItem,"cartItem");

    return(
        <div className="flex justify-between bg-pink-100 shadow-sm mb-2 h-100px">
            <div className="logo-container">
            <i className="fas fa-bread-slice" style={{ fontSize: '48px', color: '#c76767',margin:'20px 20px' }}></i>

            {/* <img src={LOGO_URL} alt="Smoking Burger Logo" className="w-22"/> */}

            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-2">Online Status:{onlineStatus?"💚":"🖤"}</li>
                    <li className="px-2"><Link  to="/">Home</Link></li>
                    <li className="px-2"><Link  to="/about">About</Link></li>
                    <li className="px-2"><Link  to="/contact">Contact Us</Link></li>
                    <li className="px-2  "><Link to="/cart">Cart({cartItem.length})</Link></li>
                    <button className="login" onClick={()=>
                        auth==="Login"?
                        setAuth("Logout"):
                        setAuth("Login")
                        }>{auth}</button>
                         <li className="px-2"><a  href="">{data.loggedInUser}</a></li>
                </ul>
            </div>

        </div>
    )
}
export default Header;