import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ShopinCart from "./Pages/ShopinCart";

const App = () => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Routes>
        <Route path="/shoppingcart" element={<ShopinCart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
