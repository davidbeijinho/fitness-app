import React from "react";
import { setLevel } from "../actions/index";
import ContinueButton from "./ContinuButton";
import { connect } from 'react-redux'
const Question3 = (props) => (
  <div className="box">
    <h1 className="label is-large">NIVEL DE ACTIVIDADE FÍSICA?</h1>

    <div className="field">
      <div className="control">
        <input type="radio" name="level" value="1" id="level-1" onChange={props.sendState} checked={props.level == 1} />
        <label htmlFor="level-1" className="radio">TENHO UMA VIDA COMPLETAMENTE SEDENTARIA</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input type="radio" name="level" value="2" id="level-2" onChange={props.sendState} checked={props.level == 2} />
        <label htmlFor="level-2" className="radio">PRATICO ACTIVIDADE FÍSICA DE FORMA MUITO PONTUAL</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input type="radio" name="level" value="3" id="level-3" onChange={props.sendState} checked={props.level == 3} />
        <label htmlFor="level-3" className="radio">PRATICO ACTIVIDADE FÍSICA 2 A 3 VEZES POR SEMANA</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input type="radio" name="level" value="4" id="level-4" onChange={props.sendState} checked={props.level == 4} />
        <label htmlFor="level-4" className="radio">PRATICO ACTIVIDADE FÍSICA 4 A 5 VEZES POR SEMANA</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input type="radio" name="level" value="5" id="level-5" onChange={props.sendState} checked={props.level == 5} />
        <label htmlFor="level-5" className="radio">NÃO CONSIGO PASSAR UM DIA SEM PRATICAR ACTIVIDADE FÍSCA</label>
      </div>
    </div>

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