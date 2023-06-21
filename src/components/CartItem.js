import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Cardcontext } from "../context/Context";

const CartItem = ({ item }) => {
    const {RemoveCart, incrimentAmound, DescrementAmound} = useContext(Cardcontext)
    return (
        <div className="flex gap-x-4">
            <div className="w-4/12 border flex justify-center items-center">
                <img className="h-[100px]" src={item.image} />
            </div>
            <div className="w-8/12 flex justify-between gap-x-4">
                <div>
                    <div>{item.title}</div>
                    <div className="flex gap-x-4">
                        <div className="flex items-center gap-x-4 border">
                            <div onClick={()=> DescrementAmound(item.id)}>
                                <AiOutlineMinus />
                            </div>
                            <div>{item.amound}</div>
                            <div onClick={()=> incrimentAmound(item.id)}>
                                <AiOutlinePlus />
                            </div>
                        </div>
                        <div>$ {item.price}</div>
                        <div>Total ${parseFloat(item.amound * item.price)}</div>
                    </div>
                </div>
                <div onClick={()=> RemoveCart(item.id)}>
                    <ImCross />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
