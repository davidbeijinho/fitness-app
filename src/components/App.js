import React, { Component } from 'react/index.js';
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from "react-router-dom";
import RadioQuestion from './RadioQuestion.js';
import InputQuestion from './InputQuestion.js';
import Welcome from './Welcome.js';
import Finish from './Finish.js';
import Loading from './Loading.js';

import { setSex, setLevel, setGoal, setType, setAge, setHeight, setWeight } from "../actions/index.js";
import API from '../utils/api.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    API.loadData().then(
      (values) => {
        this.setState({
          ...values,
          loading: false,
        });
      }
    );
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    } else {
      return (
        <Router>
          <div>
            <Route exact path="/" render={() => <Welcome title={this.state.others.welcome.title} link="/question1" value={1} content={this.state.others.welcome.text} enabledLabel={this.state.others.questions.button.label.enabled} disabledLabel={this.state.others.questions.button.label.disabled} />} />
            <Route exact path="/question1" render={() => <RadioQuestion question={this.state.questions[0]} value={this.props.sex} sendState={this.props.setSex} enabledLabel={this.state.others.questions.button.label.enabled} disabledLabel={this.state.others.questions.button.label.disabled} />} />
            <Route exact path="/question2" render={() => <InputQuestion question={this.state.questions[1]}
              value={[this.props.age, this.props.height, this.props.weight]}
              sendState={{ setAge: this.props.setAge, setHeight: this.props.setHeight, setWeight: this.props.setWeight }}
              enabledLabel={this.state.others.questions.button.label.enabled} disabledLabel={this.state.others.questions.button.label.disabled}
            />} />
            <Route exact path="/question3" render={() => <RadioQuestion question={this.state.questions[2]} value={this.props.level} sendState={this.props.setLevel} enabledLabel={this.state.others.questions.button.label.enabled} disabledLabel={this.state.others.questions.button.label.disabled} />} />
            <Route exact path="/question4" render={() => <RadioQuestion question={this.state.questions[3]} value={this.props.goal} sendState={this.props.setGoal} enabledLabel={this.state.others.questions.button.label.enabled} disabledLabel={this.state.others.questions.button.label.disabled} />} />
            <Route exact path="/question5" render={() => <RadioQuestion question={this.state.questions[4]} value={this.props.type} sendState={this.props.setType} enabledLabel={this.state.others.questions.button.label.enabled} disabledLabel={this.state.others.questions.button.label.disabled} />} />
            <Route exact path="/finish" render={() => <Finish title={this.state.others.finish.title} buttonLabel={this.state.others.finish.buttonTex} {...this.props} />} />
          </div>
        </Router>
      );
    }
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