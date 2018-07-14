import React from "react";
import { connect } from 'react-redux'
import { setSex } from "../actions/index";
import ContinueButton from "./ContinuButton";
import RadioButton from "./RadioButton";
import QUESTIONS from '../questions';
const DATA = QUESTIONS[0];

const Question1 = (props) => (
  <div className="box">
    <h1 className="label is-large">{DATA.title}</h1>

    <RadioButton
      name={DATA.name}
      value={DATA.options[0].value}
      label={DATA.options[0].label}
      onChange={props.sendState}
      checked={props.sex === DATA.options[0].value}
    />

    <RadioButton
      name={DATA.name}
      value={DATA.options[1].value}
      label={DATA.options[1].label}
      onChange={props.sendState}
      checked={props.sex === DATA.options[1].value}
    />

    <ContinueButton value={props.sex} link="/question2" />

  </div>
);

const mapStateToProps = (state) => {
  return {
    sex: state.sex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendState: changeEvent => {
      dispatch(setSex(changeEvent.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question1);