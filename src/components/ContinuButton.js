import React from "react";
import { Link } from "react-router-dom";
import { OTHERS } from '../constants';
import Button from '@material-ui/core/Button';

function validateProps(props) {
  if (Array.isArray(props)) {
    return props.some(x => x === '' || x === 0);
  } else {
    return props === '' || props === 0;
  }
}

const ContinueButton = ({ value, link }) => (
  validateProps(value) ?
    <Button variant="contained" disabled color="primary">{OTHERS.questions.button.label}</Button> :
    <Link to={link}><Button variant="contained" color="primary">{OTHERS.questions.button.label}</Button></Link>
);

export default ContinueButton;