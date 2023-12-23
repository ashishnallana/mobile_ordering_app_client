import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import NumberFormatComponent from "./NumberFormatComponent";
import CloseIcon from "@mui/icons-material/Close";
import { getCartTotal } from "../Reducer";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();

  const showHideCart = () => {
    dispatch({
      type: "SHOW_HIDE_CART",
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      _id: id,
    });
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full flex z-50">
      <div
        onClick={() => showHideCart()}
        className="h-full w-full  bg-[rgba(0,0,0,0.5)]"
      ></div>
      <div className="bg-white flex flex-col items-center">
        <h2 className="w-[350px] my-3 text-center">
          You have {cart.length} items in your cart.
        </h2>

        <button className="bg-yellow-500 px-3 py-1 rounded font-semibold flex items-center space-x-2 mb-5">
          <span>Pay</span>
          <NumberFormatComponent value={getCartTotal(cart)} />
        </button>
        <div>
          {cart.map((e, i) => (
            <div className="flex items-center justify-between px-2" key={i}>
              <div className="flex space-x-1 mx-1 my-1 items-center">
                <img
                  src={e.coverImg}
                  alt={e.name}
                  className="h-[100px] w-[100px]"
                />
                <div>
                  <h1 className="text-sm font-semibold">{e.name}</h1>
                  <h2 className="text-sm mt-2">
                    <NumberFormatComponent value={e.price} />
                  </h2>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(e._id)}
                className="bg-[rgba(0,0,0,0.5)] text-white rounded-full p-[5px] ml-2"
              >
                <CloseIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
