import React from "react";
import { connect } from 'react-redux'
import { setType } from "../actions/index";
import ContinueButton from "./ContinuButton";
const Question5 = (props) => (
  <div className="box">
    <h1 className="label is-large">COM QUAL DESTAS SITUAÇÕES SE IDENTIFICA MAIS</h1>

    <div className="field">
      <div className="control">
        <input name="type" id="type-1" value="1" type="radio" onChange={props.sendState} checked={props.type == 1} />
        <label htmlFor="type-1" className="radio">GANHO MASSA MUSCULAR FACILMENTE</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input name="type" id="type-2" value="2" type="radio" onChange={props.sendState} checked={props.type == 2} />
        <label htmlFor="type-2" className="radio">TENHO MUITA DIFICULDADE EM GANHAR PESO</label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <input name="type" id="type-3" value="3" type="radio" onChange={props.sendState} checked={props.type == 3} />
        <label htmlFor="type-3" className="radio">GANHO PESO COM MUITA FACILIDADE</label>
      </div>
    </div>


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