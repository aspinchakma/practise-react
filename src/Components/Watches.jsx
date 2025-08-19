import { useEffect, useState } from "react";
import Watch from "./Watch";

const Watches = () => {
  const [watches, setWatches] = useState([]);
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
  console.log(watches);
  return (
    <div>
      <h3>Watches: {watches.length}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr",
          gap: "10px",
        }}
      >
        {watches.map((watch) => (
          <Watch key={watch.id} watch={watch}></Watch>
        ))}
      </div>
    </div>
  );
};

export default Watches;
