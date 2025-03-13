import Navber from "../components/Navber";
import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'
import ProductCard from "../components/ProductCard";

function Landing() {
  return (
    <div>
      <Navber />

      <div id="heading">
        <h1>FABLE OF KLASSIK</h1>
        <h4>Jackets KLS</h4>
      </div>

      <div id="product_cont">
        <ProductCard ProductImg={Product1} ProductName={'Jacket KLS Beige'} ProductPrice={150} />
        <ProductCard ProductImg={Product2} ProductName={'Jacket KLS Black'} ProductPrice={150} />
        <ProductCard ProductImg={Product3} ProductName={'Jacket KLS Graphite'} ProductPrice={150} />

      </div>

    </div>
  );
}

export default Landing;
