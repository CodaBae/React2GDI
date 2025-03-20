import Input from "./Input";
import Button from "./Button";

function SummaryCont() {
  let inputStyle = {
    width: "70%",
    padding: "3% 5%",
  };
  let buttonStyle = {
    background: 'black',
    padding: "1% 5%",
    color: 'white',
    fontSize: '1rem',
    width: "30%",
  }

  return (
    <div id="summary_cont">
      <div id="first">
        <div>
          <p>Summary:</p>
          <p>$340</p>
        </div>
        <div>
          <p>Delivery:</p>
          <p>$0</p>
        </div>
        <div>
          <p>Promocode:</p>
          <p>$0</p>
        </div>
      </div>

      <div className="second">
        <h2> Total: </h2>
        <h2> $340 </h2>
      </div>

      <div className="second">
        <Input inputStyle={inputStyle} placeholder={"Enter Promocode"} />
        <Button buttonName={'Apply'} buttonStyle={buttonStyle} />
      </div>
    </div>
  );
}

export default SummaryCont;
