import React from "react";
import CartItem from "./CartItem";
import "./CartList.css";

const CartList = ({
  cart,
  onItemSelect,
  total,
  onRemoveItemClick,
  setTotal,
}) => {
  const renderedList = cart.map((item) => {
    return (
      <CartItem
        setTotal={setTotal}
        onRemoveItemClick={onRemoveItemClick}
        key={item.id}
        onItemSelect={onItemSelect}
        item={item}
      />
    );
  });

  return (
    <div>
      <div className="cart-list">
        <h1>CART</h1>
        <hr />
      </div>
      <div className="ui grid cart-item three column row">
        <div className="column">
          <h3>ITEM</h3>
        </div>
        <div className="column">
          <h3>PRICE</h3>
        </div>
        <div className="column">
          {/* <h3>
                        QUANTITY
                    </h3> */}
        </div>
      </div>
      <div className="ui grid">{renderedList}</div>
      <h1 className="total">Total:{total}</h1>
      <div className="btn"></div>
      <button className="purchase-btn ui grey button">PURCHASE</button>
    </div>
  );
};

export default CartList;
