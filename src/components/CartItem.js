import Product1 from '../assets/product1.png'

function CartItem() {
  return (
    <div id='cart_item_cont'>
      <div id='cart_img'>
        <img src={Product1} />
      </div>
      <div id='cart_desc'>
        <h3>Name Product</h3>
        <p>Collections: Collections Name</p>
        <p>Article: HO57833</p>

        <div>
          <p>Size: M</p>
          <p>Color: Black</p>
          <p>
            Quantity:
            <span>-</span> 1 <span> + </span>
          </p>
        </div>

        <div>
            <p> Price: $150</p>
            <p>Delete</p>
        </div>
      </div>
    </div>
  );
}


export default CartItem