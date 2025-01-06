import AddProduct from "../pages/Admin/AddProduct";
import AdminProductDetail from "../pages/Admin/AdminProductDetail";
import AdminProducts from "../pages/Admin/AdminProducts";
import AdminRoot from "../pages/Admin/AdminRoot";
import DashBoard from "../pages/Admin/DashBoard";
import EditProduct from "../pages/Admin/EditProduct";
import Basket from "../pages/User/Basket";
import Favorites from "../pages/User/Favorites";
import Home from "../pages/User/Home";
import NoPage from "../pages/User/NoPage";
import ProductDetail from "../pages/User/ProductDetail";
import UserRoot from "../pages/User/UserRoot";

const ROUTES = [
    {
        path: "/",
        element: <UserRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/home/:id",
                element: <ProductDetail/>
            },
            {
                path: "/basket",
                element: <Basket/>
            },
            {
                path: "/favorites",
                element: <Favorites/>
            },
            {
                path: "*",
                element: <NoPage/>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot/>,
        children: [
        {
            path: "",
            element: <DashBoard/>

        },
        {
            path: "adminproducts",
            element: <AdminProducts/>
        },
        {
            path: "adminproducts/:id",
            element: <AdminProductDetail/>
        },
        {
            path:"addproduct",
            element:<AddProduct/>
        },
        {
            path:"editproduct/:id",
            element: <EditProduct/>
        }
        ]
    }
]

export default ROUTES