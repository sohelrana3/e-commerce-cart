import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cardcontext } from "../context/Context";

const Home = () => {
    const { addtocard } = useContext(Cardcontext);
    let [Homedata, setHomeData] = useState();
    let [lodding, setlodding] = useState(true);
    useEffect(() => {
        async function home() {
            let home = await axios.get("https://fakestoreapi.com/products");
            setHomeData(home.data);
            setlodding(false);
        }
        home();
    }, []);
    if (lodding) {
        return;
    }
    return (
        <div className="container mx-auto mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
                {Homedata.map((item) => (
                    <div>
                        <div className="w-full h-[300px] border relative">
                            <div className="w-full h-full flex justify-center items-center">
                                <Link to={`/product/${item.id}`}>
                                    <img
                                        className="h-[160px]"
                                        src={item.image}
                                    />
                                </Link>
                            </div>
                            <div>
                                <button
                                    onClick={() => addtocard(item, item.id)}
                                    className="absolute top-0 right-0"
                                >
                                    Add to card
                                </button>
                            </div>
                        </div>
                        <h3>{item.category}</h3>
                        <Link to={`/Product/${item.id}`}>
                            <h2>{item.title}</h2>
                        </Link>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
