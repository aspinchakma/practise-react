import { useState } from "react";
import Header from "../Components/Header";
import ShoppingItem from "../Components/ShoppingItem";
import { getDataFromLocalStorageAsObject } from "../Utilities/localStorage.js";

const ShopinCart = () => {
  const [reaminItems, setReminItes] = useState([]);
  const getDataFromLocalStorages = localStorage.getItem("cart");
  let cartArray = null;
  if (getDataFromLocalStorages) {
    cartArray = JSON.parse(getDataFromLocalStorages);
  } else {
    cartArray = [];
  }
  let selectedNumber = 0;
  const isExistionShoppingCart = localStorage.getItem("cart");
  if (isExistionShoppingCart) {
    selectedNumber = JSON.parse(isExistionShoppingCart).length;
  }

  const deleteByClicking = (data) => {
    const getDataLS = getDataFromLocalStorageAsObject();
    const filteringData = getDataLS.filter(
      (product) => product.name !== data.name
    );
    // setToLocalStorages
    localStorage.setItem("cart", JSON.stringify(filteringData));
    setReminItes(filteringData);
  };

  return (
    <div>
      <Header></Header>

      <div>
        {selectedNumber ? <h4>Selected Items: {selectedNumber}</h4> : ""}
      </div>
      {/* Selected items container */}
      <div>
        {cartArray.map((product, index) => (
          <ShoppingItem
            product={product}
            deleteByClicking={deleteByClicking}
            key={index}
          ></ShoppingItem>
        ))}
      </div>
    </div>
  );
};

export default ShopinCart;
