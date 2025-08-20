const getDataFromLocalStorageAsObject = () => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    const cartObj = JSON.parse(cart);
    return cartObj;
  }
};

export { getDataFromLocalStorageAsObject };
