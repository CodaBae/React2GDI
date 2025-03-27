import { Link } from "react-router-dom";

function Button({ buttonName, buttonStyle, linkTo, func }) {
  if (linkTo) {
    return (
      <Link to={linkTo}>
        <button onClick={func} style={buttonStyle}>
          {buttonName}
        </button>
      </Link>
    );
  } else {
    return (
      <button onClick={func} style={buttonStyle}>
        {buttonName}
      </button>
    );
  }
}

export default Button;
