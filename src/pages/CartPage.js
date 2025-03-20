import Input from "../components/Input";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import SummaryCont from "../components/SummaryCont";

function CartPage() {

   let inputStyle = {
    width:"100%",
    padding: "3% 5%",
    margin:"3% 0 5%"
   }
   let labelStyle = {
    
   }

   let btnStyle1 = {
    padding:"3% 7%",
    background:'transparent',
    border:'1px solid',
    width:'100%'

   }


  return (
    <div>
      <div id='cart_cont'>
        <div id='cart_form'>
            <form>
                <Input labelName={'City'} placeholder={'Enter City'}  labelStyle={labelStyle} inputStyle={inputStyle}/>
                <Input labelName={'Address'} placeholder={'Enter Address'} labelStyle={labelStyle} inputStyle={inputStyle}/>
                <Input labelName={'Recipient Details'} placeholder={'Enter Name and Surname'} labelStyle={labelStyle} inputStyle={inputStyle}/>
                <Input labelName={'Phone'} placeholder={'Enter Phone'} labelStyle={labelStyle} inputStyle={inputStyle}/>
                <Input labelName={'Email'} placeholder={'Enter Email'} labelStyle={labelStyle} inputStyle={inputStyle}/>

                <div>
                    <h2>Payment Method</h2>
                <Button buttonName={'Payment Card'} buttonStyle={btnStyle1}/> <br/> <br/>
                <Button buttonName={'Cash on Delivery'} buttonStyle={btnStyle1}/>
                </div>
            </form>
         

        </div>
        <div id="cart_product_view">
            <div>
                <CartItem />
                <CartItem />
                <CartItem />

            </div>

            <SummaryCont />
          
        </div>
      </div>
    </div>
  );
}

export default CartPage;
