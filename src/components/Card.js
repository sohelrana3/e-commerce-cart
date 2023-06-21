import React, { useContext } from "react";
import { Cardcontext } from "../context/Context";
import CartItem from "./CartItem";

const Card = () => {
    const { card, Total } = useContext(Cardcontext);
    return (
        <div className="container mx-auto">
            <div className="border">
                {card.map((item ,index) => (
                    <CartItem item={item} key={index} />
                ))}
            </div>
            <div className="flex justify-center">
              <span>Total: $ {parseFloat(Total).toFixed(2) }</span>
            </div>
        </div>
    );
};

export default Card;
