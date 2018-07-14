import React from "react";
import { connect } from 'react-redux'
import { setType } from "../actions/index";
import ContinueButton from "./ContinuButton";
import RadioButton from "./RadioButton";
import { QUESTIONS } from '../constants';
const DATA = QUESTIONS[4];
const Question5 = (props) => (
  <div className="box">
    <h1 className="label is-large">{DATA.title}</h1>

    <RadioButton
      name={DATA.name}
      value={DATA.options[0].value}
      label={DATA.options[0].label}
      onChange={props.sendState}
      checked={props.type === DATA.options[0].value}
    />

    <RadioButton
      name={DATA.name}
      value={DATA.options[1].value}
      label={DATA.options[1].label}
      onChange={props.sendState}
      checked={props.type === DATA.options[1].value}
    />

    <RadioButton
      name={DATA.name}
      value={DATA.options[2].value}
      label={DATA.options[2].label}
      onChange={props.sendState}
      checked={props.type === DATA.options[2].value}
    />

    <ContinueButton value={props.type} link="/final" />
  </div>
);

const mapStateToProps = (state) => {
  return {
    type: state.type,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendState: changeEvent => {
      dispatch(setType(Number(changeEvent.target.value)))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question5);