import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from "react-router-dom";
import RadioQuestion from './components/RadioQuestion.js';
import InputQuestion from './components/InputQuestion.js';
import Welcome from './components/Welcome.js';
import Finish from './components/Finish.js';
import { QUESTIONS } from './constants';
import { setSex, setLevel, setGoal, setType, setAge, setHeight, setWeight } from "./actions/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/question1" render={() => <RadioQuestion question={QUESTIONS[0]} value={this.props.sex} sendState={this.props.setSex} />} />
          <Route exact path="/question2" render={() => <InputQuestion question={QUESTIONS[1]}
            value={{ age: this.props.age, height: this.props.height, weight: this.props.weight }}
            sendState={{ setAge: this.props.setAge, setHeight: this.props.setHeight, setWeight: this.props.setWeight }}
          />} />
          <Route exact path="/question3" render={() => <RadioQuestion question={QUESTIONS[2]} value={this.props.level} sendState={this.props.setLevel} />} />
          <Route exact path="/question4" render={() => <RadioQuestion question={QUESTIONS[3]} value={this.props.goal} sendState={this.props.setGoal} />} />
          <Route exact path="/question5" render={() => <RadioQuestion question={QUESTIONS[4]} value={this.props.type} sendState={this.props.setType} />} />
          <Route exact path="/finish" component={Finish} />
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