import React from "react";
import { Link } from "react-router-dom";
import { OTHERS } from '../constants';

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
      <a className="button is-large is-primary" disabled >{OTHERS.questions.button.label}</a> :
      <Link className="button is-large is-primary" to={link} >{OTHERS.questions.button.label}</Link>
    }
  </div>
);

export default ContinueButton;