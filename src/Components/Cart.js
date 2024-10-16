import { useDispatch, useSelector } from "react-redux";
import ItemList from './ItemList';
//import { clearCart } from "../utils/CartSlice";
import { clearCart } from "./utils/CartSlice";

const Cart=()=>{
    const cartItems = useSelector((store) => {
        console.log(store?.cart?.items, "full store"); // Log the full Redux store to verify structure
        return store?.cart?.items;
        //?.cart?.cart?.items
      });
      
      console.log(cartItems, "cartItems----22");
      const dispatch=useDispatch();
    console.log(cartItems,"cartItems");
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">  Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length===0 &&(<h1>Please! add the device to Cart</h1>)}
                <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
            <ItemList data={cartItems}  />
            <button className="p-2 m-2 bg-black text-white" >Place the order</button>
            </div>
       
            </div>
    )
}
export default Cart;