import React from "react";
import { connect } from 'react-redux'
import { setGoal } from "../actions/index";
import ContinueButton from "./ContinuButton";
import RadioButton from "./RadioButton";
import QUESTIONS from '../questions';
const DATA = QUESTIONS[3];
const Question4 = (props) => (
  <div className="box">
    <h1 className="label is-large">{DATA.title}</h1>

    <RadioButton
      name={DATA.name}
      value={DATA.options[0].value}
      label={DATA.options[0].label}
      onChange={props.sendState}
      checked={props.goal === DATA.options[0].value}
    />

    <RadioButton
      name={DATA.name}
      value={DATA.options[1].value}
      label={DATA.options[1].label}
      onChange={props.sendState}
      checked={props.goal === DATA.options[1].value}
    />

    <RadioButton
      name={DATA.name}
      value={DATA.options[2].value}
      label={DATA.options[2].label}
      onChange={props.sendState}
      checked={props.goal === DATA.options[2].value}
    />

    <ContinueButton value={props.goal} link="/question5" />

  </div>
);

const mapStateToProps = (state) => {
  return {
    goal: state.goal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendState: changeEvent => {
      dispatch(setGoal(Number(changeEvent.target.value)))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question4);