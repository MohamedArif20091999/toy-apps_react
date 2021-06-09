import React from "react";
import { data } from "./data";
import ShoeItem from "./ShoeItem";

const ShoeList = ({ onItemSelect }) => {
  const renderedList = data.items.map((shoe) => {
    return <ShoeItem onItemSelect={onItemSelect} key={shoe.id} shoe={shoe} />;
  });

  return (
    <div className="ui three column centered grid container">
      <div className="row">{renderedList}</div>
    </div>
  );
};

export default ShoeList;
