import React from "react";
import { Link } from "react-router-dom";
import { OTHERS } from '../constants';

const Welcome = () => (
  <div className="box">
    <h1 className="label is-large">{OTHERS.welcome.header}</h1>
    <p>{OTHERS.welcome.text}</p>
       <br/>
    <Link className="button is-large is-primary" to="/question1" >{OTHERS.welcome.button}</Link>
  </div>
);

export default Welcome;