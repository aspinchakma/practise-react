import "./Watch.css";
const Watch = ({ watch, handleBuyButton }) => {
  const { brand, description, isSoldOut, name, price, soldNumber } = watch;
  return (
    <div className="watch">
      <h2>Model: {name}</h2>
      <p>Brand: {brand}</p>
      <p>Details: {description}</p>
      <p>Price: {price}</p>
      <p>{isSoldOut ? "Sold Out" : "Available"}</p>
      <p>Total Sold: {soldNumber}</p>
      <div>
        <button onClick={() => handleBuyButton(watch)}>Buy</button>
      </div>
    </div>
  );
};

export default Watch;
