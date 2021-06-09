import React from "react";
import "./ShoeItem.css";

const ShoeItem = ({ shoe, onItemSelect }) => {
  return (
    <div className="zoom shoe-item column">
      <div className="ui card ">
        <div className="column">
          <div className="image">
            <img className="shoe-img" alt="Shoe img" src={shoe.image} />
          </div>
          <div className="content shoe-content">
            <a href="/#" className="header">
              {shoe.name}
            </a>
            <div className="meta">
              <span className="date">{shoe.category}</span>
            </div>
            <div className="description">Rs. {shoe.price}</div>
            <button
              onClick={() => onItemSelect(shoe)}
              className="btn ui  grey button"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeItem;
