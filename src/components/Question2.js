import React from "react";
import { connect } from 'react-redux'
import { setAge, setHeight, setWeight } from "../actions/index";
import ContinueButton from "./ContinuButton";

const Question2 = (props) => (
  <div className="box">
    <h1 className="label is-large">DADOS PESSOAIS</h1>


    <div className="field">
      <div className="control has-icons-left has-icons-right">
        <input className="input is-large" type="number" placeholder="Idade" onChange={props.setAge} />
        <span className="icon is-large is-left">
          <i className="fas fa-user"></i>
        </span>
        <span className="icon is-large is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div className="field">
      <div className="control has-icons-left has-icons-right">
        <input className="input is-large" type="number" placeholder="Altura" onChange={props.setHeight} />
        <span className="icon is-large is-left">
          <i className="fas fa-ruler-vertical"></i>
        </span>
        <span className="icon is-large is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div className="field">
      <div className="control has-icons-left has-icons-right">
        <input className="input is-large" type="number" placeholder="Peso" onChange={props.setWeight} />
        <span className="icon is-large is-left">
          <i className="fas fa-weight"></i>
        </span>
        <span className="icon is-large is-right">
          <i className="fas fa-check"></i>
        </span>
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