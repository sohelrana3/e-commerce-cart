import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cardcontext } from "../context/Context";

const Navbar = () => {
    const { cartAmount } = useContext(Cardcontext);
    return (
        <div className="container flex mx-auto justify-between bg-[#1E66FF]">
            <div>
                <Link to="/">
                    <img className="py-4" src="logo.png" alt="logo" />
                </Link>
            </div>
            <div>
                <img src="" alt="logo" />
            </div>
            <div>
                <Link to="/card">
                    <button>Card ({cartAmount})</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
