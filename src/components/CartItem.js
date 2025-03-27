import Product1 from '../assets/product1.png'

function CartItem({item}) {

  return (
    <div id='cart_item_cont'>
      <div id='cart_img'>
        <img src={item.product.image} />
      </div>
      <div id='cart_desc'>
        <h3>{item.product.name}</h3>
        <p>Collections: {item.product.name}</p>
        <p>Article: {item.product._id}</p>

        <div>
          <p>Size: M</p>
          <p>Color: Black</p>
          <p>
            Quantity:
            <span>-</span>{item.quantity}<span> + </span>
          </p>
        </div>

        <div>
            <p> Price: ${item.product.amount}</p>
            <p>Delete</p>
        </div>
      </div>
    </div>
  );
}


export default CartItem