import Home from "./pages/home/Home"
import "./styles/global.scss"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Users from "./pages/users/Users";
import Orders from "./pages/orders/Orders";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/products",
          element: <Products/>,
        },
        {
          path: "/users",
          element: <Users/>,
        },
        {
          path: "/orders",
          element: <Orders/>,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
