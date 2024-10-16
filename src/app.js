import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUS";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";
import { Provider } from "react-redux";
import appStore from "./Components/utils/appStore";
import Cart from "./Components/Cart";


const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />

            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/resturants/:resId",
                element: <ResturantMenu />
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ],
        errorElement: <Error />
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)