import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav style={{ textAlign: "center" }}>
      <Link className="nav_link" to="/">
        HOME
      </Link>
      <Link className="nav_link" to="/shoppingcart">
        SHOPPING CART
      </Link>
      <Link className="nav_link" to="/contact">
        CONTACT
      </Link>
    </nav>
  );
};

export default Header;
