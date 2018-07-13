import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (
  <div className="box">
    <h1>Ora aqui esta o questionario e tal</h1>
    <Link to="/question1">Comecar</Link>
  </div>
);

export default Welcome;