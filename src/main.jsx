import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import { CartProvider } from "./Context/CartContext/CartContext.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <CartProvider>
      {" "}
      {/* Wrap the entire application with CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
