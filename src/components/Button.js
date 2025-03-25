import { Link } from "react-router-dom";

function Button({ buttonName, buttonStyle, linkTo, func }) {
  return (
    <Link to={linkTo ? `/${linkTo}` : ""}>
      <button onClick={func}  style={buttonStyle}>{buttonName}</button>
    </Link>
  );
}

export default Button;
