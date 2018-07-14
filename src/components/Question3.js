import React from "react";
import { setLevel } from "../actions/index";
import ContinueButton from "./ContinuButton";
import { connect } from 'react-redux'
import RadioButton from "./RadioButton";
import { QUESTIONS } from '../constants';
const DATA = QUESTIONS[2];
const Question3 = (props) => (
  <div className="box">
    <h1 className="label is-large">{DATA.title}</h1>

    <RadioButton
      name={DATA.name}
      value={DATA.options[0].value}
      label={DATA.options[0].label}
      onChange={props.sendState}
      checked={props.level === DATA.options[0].value}
    />

    <RadioButton
      name={DATA.name}
      value={DATA.options[1].value}
      label={DATA.options[1].label}
      onChange={props.sendState}
      checked={props.level === DATA.options[1].value}
    />

    <RadioButton
      name={DATA.name}
      value={DATA.options[2].value}
      label={DATA.options[2].label}
      onChange={props.sendState}
      checked={props.level === DATA.options[2].value}
    />

    <RadioButton
      name={DATA.name}
      value={DATA.options[3].value}
      label={DATA.options[3].label}
      onChange={props.sendState}
      checked={props.level === DATA.options[3].value}
    />
  
    <RadioButton
      name={DATA.name}
      value={DATA.options[4].value}
      label={DATA.options[4].label}
      onChange={props.sendState}
      checked={props.level === DATA.options[4].value}
    />

    <ContinueButton value={props.level} link="/question4" />
  </div>
);

const mapStateToProps = (state) => {
  return {
    level: state.level,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendState: changeEvent => {
      dispatch(setLevel(Number(changeEvent.target.value)))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question3);