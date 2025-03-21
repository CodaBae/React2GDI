import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../features/productsSlice";

function Landing() {

  const dispatch = useDispatch()

  const {items:products, status, error} = useSelector((state)=> state.products)

  useEffect(() =>{
    dispatch(fetchProductsAsync)

  })

  console.log(products, status, error )

  return (
    <div>
      <div id="heading">
        <h1>FABLE OF KLASSIK</h1>
        <h4>Jackets KLS</h4>
      </div>

      <div id="product_cont">
        {/* {
          products.map((item, index) => {
            return (
              <ProductCard
                ProductImg={item.img}
                ProductName={item.name}
                ProductPrice={item.price}
              />
            );
          })
        } */}
      </div>
    </div>
  );
}

export default Landing;
