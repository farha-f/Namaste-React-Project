import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./utils/CartSlice"; // Import removeItem action
import { CDN_URL } from "./utils/constants";




const ItemList = ({ data }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); // Cart items from Redux store

    // Check if an item is in the cart
    const isItemInCart = (id) => {
        return cartItems.some(item => item.card.info.id === id); // Check if the item exists in the cart
    };

    const handleAddItem = (item) => {
        dispatch(addItem(item)); // Dispatch addItem action to add the item to the cart
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item)); // Dispatch removeItem action to remove the item from the cart
    };

    return (
        <div>
            {data.map((item) => {
                const itemInCart = isItemInCart(item.card.info.id); // Check if item is in the cart
                console.log(itemInCart,"itemInCart")

                return (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item?.card?.info?.name}</span>
                                <span>- ₹ {item?.card?.info?.price / 100}</span>
                            </div>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 p-2">
                            <div className="absolute mx-auto mb-0 ">
                                {itemInCart ? (
                                    // If item is in the cart, show + and - buttons
                                    <div className="flex items-center">
                                        <button
                                            className="p-2 bg-black shadow-lg text-white rounded-lg"
                                            onClick={() => handleRemoveItem(item)}
                                        >
                                            -
                                        </button>
                                        <span>&nbsp;&nbsp;&nbsp;</span>
                                        <button
                                            className="p-2 bg-black shadow-lg text-white rounded-lg"
                                            onClick={() => handleAddItem(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    // If item is not in the cart, show Add button
                                    <button
                                        className="p-2 bg-black shadow-lg text-white rounded-lg "
                                        onClick={() => handleAddItem(item)}
                                    >
                                        Add +
                                    </button>
                                )}
                            </div>
                            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full " />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
