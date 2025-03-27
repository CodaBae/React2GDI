import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductCard({ProductImg, ProductName, ProductPrice, ProductDesc, ProductId}) {

  const navigate = useNavigate()


  const navAndStore = () =>{
   const productId = ProductId

   localStorage.setItem("productId",productId)

   navigate('/view')

  }
  


  return (
    <div id="product_card">
      <div>
        <img id="product_img" src={ProductImg}/>
      </div>
      <div>
       <h3 onClick={navAndStore} id="product_name">{ProductName}</h3>
        <h3 id="product_price">€{ProductPrice}</h3>
      </div>
    </div>
  );
}
export default ProductCard
