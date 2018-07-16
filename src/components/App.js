import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import RadioQuestion from './RadioQuestion';
import InputQuestion from './InputQuestion';
import Welcome from './Welcome';
import Finish from './Finish';
import Loading from './Loading';

import {
  setSex, setLevel, setGoal, setType, setAge, setHeight, setWeight,
} from '../actions/index';
import API from '../utils/api';

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
      },
    );
  }

  render({ state, props }) {
    if (state.loading) {
      return (<Loading />);
    }
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Welcome title={state.others.welcome.title} link="/question1" value={1} content={state.others.welcome.text} enabledLabel={state.others.questions.button.label.enabled} disabledLabel={state.others.questions.button.label.disabled} />} />
          <Route exact path="/question1" render={() => <RadioQuestion question={state.questions[0]} value={props.sex} sendState={props.setSex} enabledLabel={state.others.questions.button.label.enabled} disabledLabel={state.others.questions.button.label.disabled} />} />
          <Route
            exact
            path="/question2"
            render={() => (
              <InputQuestion
                question={state.questions[1]}
                value={[props.age, props.height, props.weight]}
                sendState={{
                  setAge: props.setAge,
                  setHeight: props.setHeight,
                  setWeight: props.setWeight,
                }}
                enabledLabel={state.others.questions.button.label.enabled}
                disabledLabel={state.others.questions.button.label.disabled}
              />
            )}
          />
          <Route exact path="/question3" render={() => <RadioQuestion question={state.questions[2]} value={props.level} sendState={props.setLevel} enabledLabel={state.others.questions.button.label.enabled} disabledLabel={state.others.questions.button.label.disabled} />} />
          <Route exact path="/question4" render={() => <RadioQuestion question={state.questions[3]} value={props.goal} sendState={props.setGoal} enabledLabel={state.others.questions.button.label.enabled} disabledLabel={state.others.questions.button.label.disabled} />} />
          <Route exact path="/question5" render={() => <RadioQuestion question={state.questions[4]} value={props.type} sendState={props.setType} enabledLabel={state.others.questions.button.label.enabled} disabledLabel={state.others.questions.button.label.disabled} />} />
          <Route exact path="/finish" render={() => <Finish title={state.others.finish.title} buttonLabel={state.others.finish.buttonTex} results={state.results} {...props} />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setSex: (changeEvent) => {
    dispatch(setSex(changeEvent.target.value));
  },
  setLevel: (changeEvent) => {
    dispatch(setLevel(Number(changeEvent.target.value)));
  },
  setGoal: (changeEvent) => {
    dispatch(setGoal(Number(changeEvent.target.value)));
  },
  setType: (changeEvent) => {
    dispatch(setType(Number(changeEvent.target.value)));
  },
  setAge: (changeEvent) => {
    dispatch(setAge(Number(changeEvent.target.value)));
  },
  setHeight: (changeEvent) => {
    dispatch(setHeight(Number(changeEvent.target.value)));
  },
  setWeight: (changeEvent) => {
    dispatch(setWeight(Number(changeEvent.target.value)));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
