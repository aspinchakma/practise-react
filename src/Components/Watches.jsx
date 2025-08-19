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
    // check to existing watch
    console.log(watch);
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
