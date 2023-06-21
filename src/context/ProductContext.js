import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();


export const Product = ({Children})=>{
    let [Products, setProducts] = useState()
    let [lodding, setlodding] = useState(true);
    useEffect(() => {
        async function product() {
            let productdata = await axios.get("https://fakestoreapi.com/products");
            setProducts(productdata.data);
            setlodding(false);
        }
        product();
    }, []);
    if(lodding){
        return
    }
    return (
        <ProductContext.Provider value={Products}>{Children}</ProductContext.Provider>
    );
};

export default Product