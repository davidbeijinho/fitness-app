import React from "react";
import { connect } from 'react-redux'
import { setAge, setHeight, setWeight } from "../actions/index";
import ContinueButton from "./ContinuButton";
import { QUESTIONS } from '../constants';
const DATA = QUESTIONS[1];

const Question2 = (props) => (
  <div className="box">
    <h1 className="label is-large">{DATA.title}</h1>

    <div className="field">
      <div className="field-label"></div>
      <div className="field-body">
        <div className="field is-expanded">
          <div className="field has-addons">
            <p className="control is-expanded has-icons-left">
              <input className="input is-large" type="number" placeholder={DATA.options[0].label} onChange={props.setAge} />
              <span className="icon is-large is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
            <p className="control">
              <a className="button is-large is-static">{DATA.options[0].extraLabel}</a>
            </p>
          </div>
          <p className="help">{DATA.options[0].help}</p>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="field-label"></div>
      <div className="field-body">
        <div className="field is-expanded">
          <div className="field has-addons">
            <p className="control is-expanded has-icons-left">
              <input className="input is-large" type="number" placeholder={DATA.options[1].label} onChange={props.setHeight} />
              <span className="icon is-large is-left">
                <i className="fas fa-ruler-vertical"></i>
              </span>
            </p>
            <p className="control">
              <a className="button is-large is-static">{DATA.options[1].extraLabel}</a>
            </p>
          </div>
          <p className="help">{DATA.options[1].help}</p>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="field-label"></div>
      <div className="field-body">
        <div className="field is-expanded">
          <div className="field has-addons">
            <p className="control is-expanded has-icons-left">
              <input className="input is-large" type="number" placeholder={DATA.options[2].label} onChange={props.setWeight} />
              <span className="icon is-large is-left">
                <i className="fas fa-weight"></i>
              </span>
            </p>
            <p className="control">
              <a className="button is-large is-static">{DATA.options[2].extraLabel}</a>
            </p>
          </div>
          <p className="help">{DATA.options[2].help}</p>
        </div>
      </div>
    </div>

    <ContinueButton value={[props.age, props.height, props.weight]} link="/question3" />

  </div>
);


const mapStateToProps = (state) => {
  return {
    age: state.age,
    height: state.height,
    weight: state.weight,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAge: changeEvent => {
      dispatch(setAge(Number(changeEvent.target.value)))
    },
    setHeight: changeEvent => {
      dispatch(setHeight(Number(changeEvent.target.value)))
    },
    setWeight: changeEvent => {
      dispatch(setWeight(Number(changeEvent.target.value)))
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question2);