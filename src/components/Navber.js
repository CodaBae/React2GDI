import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navber() {
  return (
    <nav>
      <div>
      <Link to={'/'}><img src={Logo} /></Link>
      </div>
      <div>
        <Link to={'/'}><p>Collections</p></Link>
        <Link to={'/cart'}><p>Cart</p> </Link>
        <p>Sale</p>
      </div>
      <div>
        <Link to={'/order'}><p>Orders</p></Link>
      </div>
    </nav>
  );
}

export default Navber;
