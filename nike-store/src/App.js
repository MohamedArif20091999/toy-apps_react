import React from "react";
import ShoeList from "./ShoeList";
import CartList from "./CartList";

class App extends React.Component {
  state = { cart: [], total: 0 };

  setTotal = (items) => {
    let setTotal = "0";
    items.forEach((item) => {
      setTotal = parseInt(setTotal) + parseInt(item.price.replace(",", ""));
    });
    this.setState({ total: setTotal });
  };

  onItemSelect = (item) => {
    if (this.state.cart.find((cItem) => cItem.id === item.id)) {
      alert("Item already exist in cart.");
      return;
    }
    let setItems = this.state.cart;
    setItems.push(item);
    this.setState({ cart: setItems });
    this.setTotal(this.state.cart);
  };

  onRemoveItemClick = (removeItem) => {
    const stateArray = [...this.state.cart];
    const updateState = stateArray.filter((item) => item.id !== removeItem.id);
    this.setState({ cart: updateState }, () => this.setTotal(this.state.cart));
  };

  render() {
    return (
      <div>
        <h1>Nike Store</h1>
        <ShoeList onItemSelect={this.onItemSelect} />
        <CartList
          onRemoveItemClick={this.onRemoveItemClick}
          onItemSelect={this.onItemSelect}
          cart={this.state.cart}
          total={this.state.total}
          setTotal={this.setTotal}
        />
      </div>
    );
  }
}

export default App;
