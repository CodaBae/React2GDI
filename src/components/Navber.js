import Logo from "../assets/logo.png";

function Navber(a, b) {
  return (
    <nav>
      <div>
        <img src={Logo} />
      </div>
      <div>
        <p>Collections</p>
        <p>Customizer</p>
        <p>Sale</p>
      </div>
      <div>
        <p>Items</p>
      </div>
    </nav>
  );
}

export default Navber;
