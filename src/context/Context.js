import { createContext, useEffect, useState } from "react";

export const Cardcontext = createContext();
export const Context = (props) => {
    //card
    let [card, setcard] = useState([]);
    let [cartAmount, setcartAmount] = useState(0);
    let [Total, settotal] = useState(0);
    // cart add value
    useEffect(() => {
        if (card) {
            const amounditem = card.reduce((incerment, current) => {
                return incerment + current.amound;
            }, 0);
            setcartAmount(amounditem);
        }
    }, [card]);
    // total value
    useEffect(() => {
        const totals = card.reduce((incerment, current) =>{
            return incerment + current.price * current.amound
        },0)
        settotal(totals)
    }, [card]);
    // add to cart
    const addtocard = (item, id) => {
        const Newitem = { ...item, amound: 1 };
        const Carditem = card.find((item) => {
            return item.id === id;
        });
        if (Carditem) {
            const newCard = [...card].map((item) => {
                if (item.id === id) {
                    return { ...item, amound: Carditem.amound + 1 };
                } else {
                    return item;
                }
            });
            setcard(newCard);
        } else {
            setcard([...card, Newitem]);
        }
    };
    const RemoveCart = (id) => {
        const NewCart = card.filter((item) => {
            return item.id !== id;
        });
        setcard(NewCart);
    };
    const incrimentAmound = (id) => {
        const Cartitem = card.find((item) => item.id === id);
        addtocard(Cartitem, id);
    };

    const DescrementAmound = (id) => {
        const Cartitem = card.find((item) => {
            return item.id === id;
        });
        if (Cartitem) {
            const NewCart = card.map((item) => {
                if (item.id === id) {
                    return { ...item, amound: Cartitem.amound - 1 };
                } else {
                    return item;
                }
            });
            setcard(NewCart);
        }
        if (Cartitem.amound < 2) {
            RemoveCart(id);
        }
    };
    return (
        <Cardcontext.Provider
            value={{
                card,
                addtocard,
                RemoveCart,
                incrimentAmound,
                cartAmount,
                DescrementAmound,
                Total
            }}
        >
            {props.children}
        </Cardcontext.Provider>
    );
};

export default Context;
