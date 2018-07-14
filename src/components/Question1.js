import React from "react";
import { connect } from 'react-redux'
import { setSex } from "../actions/index";
import ContinueButton from "./ContinuButton";

const Question1 = (props) => (
  <div className="box">
    <h1 className="label is-large">Sexo gostas?</h1>

    <div className="field">
      <div className="control">
        <input type="radio" name="sex" value="MALE" id="sexMale" checked={props.sex === 'MALE'} onChange={props.sendState} />
        <label className="radio" htmlFor="sexMale" >MALE</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input type="radio" name="sex" value="FEMALE" id="sexFemale" checked={props.sex === 'FEMALE'} onChange={props.sendState} />
        <label className="radio" htmlFor="sexFemale">FEMALE</label>
      </div>
    </div>

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