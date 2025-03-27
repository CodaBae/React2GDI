import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import SummaryCont from "../components/SummaryCont";
import { useSelector, useDispatch } from "react-redux";

import { fetchCartAsync } from "../features/cartSlice";

function CartPage() {
  const dispatch = useDispatch();

  const [userdata, setUserdata] = useState({});

  const {
    items: cart,
    status,
    error,
  } = useSelector((state) => {
    return state.cart;
  });

  const [loading, setLoading] = useState(status);

  useEffect(() => {
    dispatch(fetchCartAsync(1));
  }, [dispatch]);

  const handleCity = (e) => {
    setUserdata({...userdata, city: e.target.value});
  };
  const handleAddress = (e) => {
    setUserdata({...userdata,address: e.target.value});
  };

  const handleFullname = (e) => {
    setUserdata({...userdata,fullname: e.target.value});

    console.log(userdata,'userdata')
  };




  if (status === "loading") return <div>loading</div>;

  let inputStyle = {
    width: "100%",
    padding: "3% 5%",
    margin: "3% 0 5%",
  };
  let labelStyle = {};

  let btnStyle1 = {
    padding: "3% 7%",
    background: "transparent",
    border: "1px solid",
    width: "100%",
  };

  return (
    <div>
      <div id="cart_cont">
        <div id="cart_form">
          <form>
            <Input
              func={handleCity}
              labelName={"City"}
              placeholder={"Enter City"}
              labelStyle={labelStyle}
              inputStyle={inputStyle}
            />
            <Input
            func={handleAddress}
              labelName={"Address"}
              placeholder={"Enter Address"}
              labelStyle={labelStyle}
              inputStyle={inputStyle}
            />
            <Input
            func={handleFullname}
              labelName={"Recipient Details"}
              placeholder={"Enter Name and Surname"}
              labelStyle={labelStyle}
              inputStyle={inputStyle}
            />
            <Input
              labelName={"Phone"}
              placeholder={"Enter Phone"}
              labelStyle={labelStyle}
              inputStyle={inputStyle}
            />
            <Input
              labelName={"Email"}
              placeholder={"Enter Email"}
              labelStyle={labelStyle}
              inputStyle={inputStyle}
            />

            <div>
              <h2>Payment Method</h2>
              <Button
                buttonName={"Payment Card"}
                buttonStyle={btnStyle1}
              />{" "}
              <br /> <br />
              <Button buttonName={"Cash on Delivery"} buttonStyle={btnStyle1} />
            </div>
          </form>
        </div>
        <div id="cart_product_view">
          <div>
            {cart?.items?.length > 0
              ? cart.items.map((item, index) => {
                  return <CartItem item={item} key={index} />;
                })
              : "no data"}
          </div>

          <SummaryCont />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
