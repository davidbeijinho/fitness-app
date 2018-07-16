import React, { Component } from 'react/index.js';
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from "react-router-dom";
import RadioQuestion from './RadioQuestion.js';
import InputQuestion from './InputQuestion.js';
import Welcome from './Welcome.js';
import Finish from './Finish.js';
import { QUESTIONS, OTHERS } from '../data/constants.js';
import { setSex, setLevel, setGoal, setType, setAge, setHeight, setWeight } from "../actions/index.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Welcome title={OTHERS.welcome.title} link="/question1" value={1} content={OTHERS.welcome.text} enabledLabel={OTHERS.questions.button.label.enabled} disabledLabel={OTHERS.questions.button.label.disabled} />} />
          <Route exact path="/question1" render={() => <RadioQuestion question={QUESTIONS[0]} value={this.props.sex} sendState={this.props.setSex} enabledLabel={OTHERS.questions.button.label.enabled} disabledLabel={OTHERS.questions.button.label.disabled} />} />
          <Route exact path="/question2" render={() => <InputQuestion question={QUESTIONS[1]}
            value={[this.props.age, this.props.height, this.props.weight]}
            sendState={{ setAge: this.props.setAge, setHeight: this.props.setHeight, setWeight: this.props.setWeight }}
            enabledLabel={OTHERS.questions.button.label.enabled} disabledLabel={OTHERS.questions.button.label.disabled}
          />} />
          <Route exact path="/question3" render={() => <RadioQuestion question={QUESTIONS[2]} value={this.props.level} sendState={this.props.setLevel} enabledLabel={OTHERS.questions.button.label.enabled} disabledLabel={OTHERS.questions.button.label.disabled} />} />
          <Route exact path="/question4" render={() => <RadioQuestion question={QUESTIONS[3]} value={this.props.goal} sendState={this.props.setGoal} enabledLabel={OTHERS.questions.button.label.enabled} disabledLabel={OTHERS.questions.button.label.disabled} />} />
          <Route exact path="/question5" render={() => <RadioQuestion question={QUESTIONS[4]} value={this.props.type} sendState={this.props.setType} enabledLabel={OTHERS.questions.button.label.enabled} disabledLabel={OTHERS.questions.button.label.disabled} />} />
          <Route exact path="/finish" render={() => <Finish title={OTHERS.finish.title} buttonLabel={OTHERS.finish.buttonTex} {...this.props} />} />
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    setSex: changeEvent => {
      dispatch(setSex(changeEvent.target.value))
    },
    setLevel: changeEvent => {
      dispatch(setLevel(Number(changeEvent.target.value)))
    },
    setGoal: changeEvent => {
      dispatch(setGoal(Number(changeEvent.target.value)))
    },
    setType: changeEvent => {
      dispatch(setType(Number(changeEvent.target.value)))
    },
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
)(App);