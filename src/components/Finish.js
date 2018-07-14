import React from "react";
import { connect } from 'react-redux'
import utils from '../utils';
import { OTHERS } from '../constants';
import Results from "./Results";

const Finish = (props) => (
  <div className="box">
    <h1 className="label is-large">{OTHERS.finish.header}</h1>
    <p>{utils.getText(props)}</p>
    <a href={utils.getLink(props)} >{OTHERS.finish.buttonTex}</a>

    <Results />
  </div>
);
const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
)(Finish);