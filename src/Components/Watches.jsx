import { useEffect, useState } from "react";
import Watch from "./Watch";

const Watches = () => {
  const [watches, setWatches] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://aspinchakma.github.io/api-for-practice/watches.json`
        );
        if (!response.ok) {
          alert("Server Problem");
          return;
        }
        const data = await response.json();
        setWatches(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);
  const handleBuyButton = (watch) => {
    //check data on local storage
    const isExistionShoppingCart = localStorage.getItem("cart");

    // if shopping cart not existion
    if (!isExistionShoppingCart) {
      const newCart = [{ ...watch }];
      // state
      setCart(newCart);
      const newCartStringify = JSON.stringify(newCart);
      localStorage.setItem("cart", newCartStringify);
    }

    // shopping cart existion
    if (isExistionShoppingCart) {
      let existincartArray = JSON.parse(isExistionShoppingCart);
      const existingName = existincartArray.map((item) => item.name);
      if (existingName.includes(`${watch.name}`)) {
        const increaseQuantity = existincartArray.map((item) => {
          if (item.name === watch.name) {
            const quantity = Number.parseInt(item.quantity);
            item.quantity = quantity + 1;
            return item;
          } else {
            return item;
          }
        });
        existincartArray = [...increaseQuantity];
      } else {
        existincartArray.push(watch);
      }

      const convertToStringify = JSON.stringify(existincartArray);
      setCart(existincartArray);
      localStorage.setItem("cart", convertToStringify);
    }
  };

  console.log(cart);
  return (
    <div>
      <h3>Watches: {watches.length}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr",
          gap: "20px",
        }}
      >
        {watches.map((watch) => (
          <Watch
            handleBuyButton={handleBuyButton}
            key={watch.id}
            watch={watch}
          ></Watch>
        ))}
      </div>
    </div>
  );
};

export default Watches;
