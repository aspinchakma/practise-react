import Header from "../Components/Header";
import ShoppingItem from "../Components/ShoppingItem";

const ShopinCart = () => {
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
  return (
    <div>
      <Header></Header>

      <div>
        {selectedNumber ? <h4>Selected Items: {selectedNumber}</h4> : ""}
      </div>
      {/* Selected items container */}
      <div>
        {cartArray.map((product, index) => (
          <ShoppingItem product={product} key={index}></ShoppingItem>
        ))}
      </div>
    </div>
  );
};

export default ShopinCart;
