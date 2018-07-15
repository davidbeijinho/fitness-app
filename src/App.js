import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from "react-router-dom";
import RadioQuestion from './components/RadioQuestion.js';
import Question2 from './components/Question2.js';
import Question3 from './components/Question3.js';
import Question4 from './components/Question4.js';
import Question5 from './components/Question5.js';
import Welcome from './components/Welcome.js';
import Finish from './components/Finish.js';
import { QUESTIONS } from './constants';
import { setSex } from "./actions/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/question1" render={()=><RadioQuestion question={QUESTIONS[0]} value={this.props.sex} sendState={this.props.sendSex} />} />
          <Route exact path="/question2" render={()=><Question2 question={QUESTIONS[1]} />} />
          <Route exact path="/question3" render={()=><Question3 question={QUESTIONS[2]} />} />
          <Route exact path="/question4" render={()=><Question4 question={QUESTIONS[3]} />} />
          <Route exact path="/question5" render={()=><Question5 question={QUESTIONS[4]} />} />
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
    sendSex: changeEvent => {
      dispatch(setSex(changeEvent.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);