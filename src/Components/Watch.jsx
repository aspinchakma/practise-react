const Watch = ({ watch }) => {
  const { brand, description, isSoldOut, name, price, soldNumber } = watch;
  return (
    <div style={{ border: "1px solid black", padding: "12px" }}>
      <h2>Model: {name}</h2>
      <p>Brand: {brand}</p>
      <p>Details: {description}</p>
      <p>Price: {price}</p>
      <p>{isSoldOut ? "Sold Out" : "Available"}</p>
      <p>Total Sold: {soldNumber}</p>
    </div>
  );
};

export default Watch;
