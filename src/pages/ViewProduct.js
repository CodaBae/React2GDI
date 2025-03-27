import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { addToCartAsync } from "../features/cartSlice";
import { fetchProductsByIDAsync } from "../features/productsSlice";

function ViewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    items: products,
    status,
    error,
  } = useSelector((state) => {
    return state.products;
  });
  const id = localStorage.getItem("productId");

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsByIDAsync(id));
    }
  }, [dispatch]);

  const addToCartFunc = () => {
    dispatch(addToCartAsync({ userId: 1, productId: id, quantity: 1 }));

    navigate("/cart");
  };

  if (status === "loading") return <div>loading</div>;

  let btnStyle = {
    padding: "3% 7%",
    border: "none",
    color: "#fff",
    background: "#b4b0b0",
    cursor: "pointer",
    fontSize: "1.2rem",
  };
  return (
    <div>
      <div id="view_product_cont">
        <div id="product_img_view">
          <img src={products?.image} />
        </div>
        <div id="product_info_view">
          <div>
            <h1> {products?.name}</h1>
            <h3> {products?.amount}</h3>
          </div>

          <Button
            func={addToCartFunc}
            buttonName={"Add to Cart"}
            buttonStyle={btnStyle}
          />

          <div>
            <h5>Product Info</h5>
            <h5>{products?.description}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
