import { useState, useEffect } from "react";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import { addToCartAsync } from "../features/cartSlice";

import { UseDispatch, useDispatch } from "react-redux";

function ViewProduct() {
const [singleData, setSingledata] = useState()
const dispatch = useDispatch()  
const location = useLocation()


useEffect(()=>{

  let data = location?.state?.product
  setSingledata(data)
})



// useris,productid,quantity

console.log(location)

const handleAddToCart = () => {
  const userId ='1'
   const productId = singleData.ProductId
  const quantity = 1

  dispatch(addToCartAsync(userId,productId,quantity))

}



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

      <div id="view_product_cont">
        <div id="product_img_view">
          <img src={singleData?.ProductImg} />
        </div>
        <div id="product_info_view">
          <div>
            <h1> {singleData?.ProductName}</h1>
            <h3> {singleData?.ProductPrice}</h3>
          </div>

          <Button func={handleAddToCart} buttonName={"Add to Cart"} buttonStyle={btnStyle} />

          <div>
            <h5>Product Info</h5>
            <h5>{singleData?.ProductDesc}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
