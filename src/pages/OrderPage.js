import OrderImg from "../assets/orderImg.png";
import Table from "../components/Table";

function OrderPage() {
  return (
    <div>
      <div id='order_page_cont'> 
        <div id="">
          <h1>Hello Darla</h1>
        </div>
        <div id="order_info">
          <img src={OrderImg} />
          <div>
            <p>Bonus card</p>
            <p>250 points</p>
          </div>
          <div>
            <p> Cashback</p>
            <p> 5%</p>
          </div>
        </div>
        <div>
            <h1> Recent Orders</h1>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
