import React from "react";
import { OTHERS } from '../constants';
import CardQuestion from "./CardQuestion";

const Welcome = () => (
  <CardQuestion title={OTHERS.welcome.header} link="/question1" value={1} >
    <p>{OTHERS.welcome.text}</p>
  </CardQuestion>

);

export default Welcome;