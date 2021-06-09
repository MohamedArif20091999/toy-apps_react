import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onRemoveItemClick }) => {
  return (
    <div className="cart-item three column row">
      <div className="column">
        <img className="img" src={item.image} alt="Shoe img" />
      </div>
      <div className="column">
        <h4>{item.price}</h4>
      </div>
      <div className="column">
        {/* <input onChange={(e)=> console.log(e.target.value) } className="" type="number" value="1"></input> */}
        <button
          onClick={() => onRemoveItemClick(item)}
          className="btn tiny ui red button"
        >
          Remove
        </button>
      </div>
      <hr />
      {/* <div className="purchase-btn" >
                </div> */}
    </div>
  );
};

export default CartItem;
