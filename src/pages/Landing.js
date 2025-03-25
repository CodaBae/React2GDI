import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../features/productsSlice";

function Landing() {
  const dispatch = useDispatch();

  const {
    items: products,
    status,
    error,
  } = useSelector((state) => {
    return state.products;
  });

  const [loading, setLoading] = useState(status);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  if (status === "loading") return <div>loading</div>;

  return (
    <div>
      <div id="heading">
        <h1>FABLE OF KLASSIK</h1>
        <h4>Jackets KLS</h4>
      </div>

      <div id="product_cont">
        {products.map((item, index) => {
          return (
            <ProductCard
              ProductImg={item.image}
              ProductName={item.name}
              ProductPrice={item.amount}
              ProductDesc={item.description}
              ProductId={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Landing;
