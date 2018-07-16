import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import RadioQuestion from './RadioQuestion';
import InputQuestion from './InputQuestion';
import Welcome from './Welcome';
import Finish from './Finish';
import Loading from './Loading';

import {
  setSex as setSexAction,
  setLevel as setLevelAction,
  setGoal as setGoalAction,
  setType as setTypeAction,
  setAge as setAgeAction,
  setHeight as setHeightAction,
  setWeight as setWeightAction,
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
    API.loadData()
      .then((values) => {
        this.setState({
          ...values,
          loading: false,
        });
      });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (<Loading />);
    }
    const {
      others,
      questions,
      results,
    } = this.state;
    const {
      age,
      sex,
      height,
      weight,
      setAge,
      setSex,
      setLevel,
      setHeight,
      setGoal,
      setWeight,
      setType,
      level,
      type,
      goal,
    } = this.props;
    const buttonLabels = {
      enabledLabel: others.questions.button.label.enabled,
      disabledLabel: others.questions.button.label.disabled,
    };
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Welcome
                title={others.welcome.title}
                link="/question1"
                value={1}
                content={others.welcome.text}
                {...buttonLabels}
              />
            )}
          />
          <Route
            exact
            path="/question1"
            render={() => (
              <RadioQuestion
                question={questions[0]}
                value={sex}
                sendState={setSex}
                {...buttonLabels}
              />
            )}
          />
          <Route
            exact
            path="/question2"
            render={() => (
              <InputQuestion
                question={questions[1]}
                value={[age, height, weight]}
                sendState={{
                  setAge,
                  setHeight,
                  setWeight,
                }}
                {...buttonLabels}
              />
            )}
          />
          <Route
            exact
            path="/question3"
            render={() => (
              <RadioQuestion
                question={questions[2]}
                value={level}
                sendState={setLevel}
                {...buttonLabels}
              />
            )}
          />
          <Route
            exact
            path="/question4"
            render={() => (
              <RadioQuestion
                question={questions[3]}
                value={goal}
                sendState={setGoal}
                {...buttonLabels}
              />
            )}
          />
          <Route
            exact
            path="/question5"
            render={() => (
              <RadioQuestion
                question={questions[4]}
                value={type}
                sendState={setType}
                {...buttonLabels}
              />
            )}
          />
          <Route
            exact
            path="/finish"
            render={() => (
              <Finish
                title={others.finish.title}
                buttonLabel={others.finish.buttonTex}
                results={results}
                {...this.props}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setSex: (changeEvent) => {
    dispatch(setSexAction(changeEvent.target.value));
  },
  setLevel: (changeEvent) => {
    dispatch(setLevelAction(Number(changeEvent.target.value)));
  },
  setGoal: (changeEvent) => {
    dispatch(setGoalAction(Number(changeEvent.target.value)));
  },
  setType: (changeEvent) => {
    dispatch(setTypeAction(Number(changeEvent.target.value)));
  },
  setAge: (changeEvent) => {
    dispatch(setAgeAction(Number(changeEvent.target.value)));
  },
  setHeight: (changeEvent) => {
    dispatch(setHeightAction(Number(changeEvent.target.value)));
  },
  setWeight: (changeEvent) => {
    dispatch(setWeightAction(Number(changeEvent.target.value)));
  },
});

App.propTypes = {
  sex: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
  setSex: PropTypes.func.isRequired,
  setLevel: PropTypes.func.isRequired,
  setGoal: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  setAge: PropTypes.func.isRequired,
  setHeight: PropTypes.func.isRequired,
  setWeight: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
