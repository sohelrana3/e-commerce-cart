import logo from "./logo.svg";
import "./App.css";
import RootLayouts from "./components/RootLayouts";
import Home from "./pages/Home";
import Card from "./components/Card";
import Product from "./components/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
   element: <RootLayouts /> ,
   children: [
    {path: "/",  element: <Home />},
    {path: "/card",  element: <Card />},
    {path: "/product/:id",  element: <Product />},
   
   ],

}]);

function App() {
    return  <RouterProvider router={router} />;
}

export default App;
