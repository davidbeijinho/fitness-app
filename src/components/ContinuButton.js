import React from "react";
import { Link } from "react-router-dom";

function validateProps(props) {
  if (Array.isArray(props)) {
    return props.some(x => x === null || x === 0 );
  } else {
    return props === null;
  }

}

const ContinueButton = ({ value, link }) => (
  <div>
    {validateProps(value) ?
      <a className="button is-large is-primary" disabled >Continue</a> :
      <Link className="button is-large is-primary" to={link} >Continue</Link>
    }
  </div>
);

export default ContinueButton;