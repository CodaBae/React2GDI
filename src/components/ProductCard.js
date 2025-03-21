import { Link } from "react-router-dom";

function ProductCard({ProductImg, ProductName, ProductPrice}) {
  return (
    <div id="product_card">
      <div>
        <img id="product_img" src={ProductImg}/>
      </div>
      <div>
        <Link to={'/view'}><h3 id="product_name">{ProductName}</h3></Link>
        <h3 id="product_price">€{ProductPrice}</h3>
      </div>
    </div>
  );
}
export default ProductCard
