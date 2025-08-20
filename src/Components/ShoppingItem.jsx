const ShoppingItem = ({ product, deleteByClicking }) => {
  const { name, price, brand, quantity } = product;
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Model: {name}</h2>
      <p>Brand: {brand}</p>
      <p>Quantity: {quantity}</p>
      <p>Each Price: {price}</p>
      <p>Total Price: {Number.parseInt(quantity) * Number.parseInt(price)}</p>
      <button onClick={() => deleteByClicking(product)}>Delete Item</button>
    </div>
  );
};

export default ShoppingItem;
