import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/shoppingcart">SHOPPING CART</Link>
    </div>
  );
};

export default Header;
