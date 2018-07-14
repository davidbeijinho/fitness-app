import React from "react";
import { connect } from 'react-redux'
import { setGoal } from "../actions/index";
import ContinueButton from "./ContinuButton";
const Question4 = (props) => (
  <div className="box">
    <h1 className="label is-large">OBJECTIVO</h1>

    <div className="field">
      <div className="control">
        <input name="goal" id="goal-1" type="radio" value="1" onChange={props.sendState} checked={props.goal === 1} />
        <label htmlFor="goal-1" className="radio">SAÚDE/MANUTENÇÃO</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input name="goal" id="goal-2" type="radio" value="2" onChange={props.sendState} checked={props.goal === 2} />
        <label htmlFor="goal-2" className="radio">REDUÇÃO DE MASSA GORDA</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input name="goal" id="goal-3" type="radio" value="3" onChange={props.sendState} checked={props.goal === 3} />
        <label htmlFor="goal-3" className="radio">AUMENTO DE MASSA MUSCULAR</label>
      </div>
    </div>

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