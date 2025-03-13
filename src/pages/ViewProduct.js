import Product1 from "../assets/product1.png";
import Button from "../components/Button";
import Navber from "../components/Navber";

function ViewProduct() {
  let btnStyle = {
    padding: "3% 7%",
    border: "none",
    color: "#fff",
    background: "#b4b0b0",
    cursor: "pointer",
    fontSize:'1.2rem'
  };
  return (
    <div>
      <Navber />
      <div id="view_product_cont">
        <div id="product_img_view">
          <img src={Product1} />
        </div>
        <div id="product_info_view">
          <div>
            <h1> Product Name</h1>
            <h3> Product Price</h3>
          </div>

          <Button buttonName={"Add to Cart"} buttonStyle={btnStyle} />

          <div>
            <h5>Product Info</h5>
            <h5>Prodect Desc</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
