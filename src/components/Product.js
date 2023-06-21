import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
   
    let [Products, setProduct] = useState();
    let [lodding, setlodding] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        async function Products() {
            let Productdata = await axios.get(
                "https://fakestoreapi.com/products"
            );
            setProduct(Productdata.data);
            setlodding(false);
        }
        Products();
    }, []);
    if (lodding) {
        return;
    }

    const product = Products.find((item) => {
        return item.id === parseInt(id);
    });
    console.log(product);

    return (
        <div className="container mx-auto ">
            <div className="w-full flex gap-x-10 border">
                <div className=" w-1/2 h-[300px] flex justify-center items-center py-10 bg-gray-50">
                    <img className="h-full " src={product.image} />
                </div>
                <div className="w-1/2">
                    <div>
                        <div>
                            <h3 className="font-opn font-semibold text-lg capitalize text-green-800 mb-4">
                                {product.category}
                            </h3>
                            <h2 className="font-bold text-lg mb-4 ">
                                {product.title}
                            </h2>
                            <h2 className="font-semibold text-lg">
                                {product.price}
                            </h2>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4">Description</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
