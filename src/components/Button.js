import { Link } from "react-router-dom";

function Button({ buttonName, buttonStyle, linkTo }) {
  return (
    <Link to={linkTo ? `/${linkTo}` : ""}>
      <button style={buttonStyle}>{buttonName}</button>
    </Link>
  );
}

export default Button;
