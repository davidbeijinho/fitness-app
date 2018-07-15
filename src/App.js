import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Question1 from './components/Question1.js';
import Question2 from './components/Question2.js';
import Question3 from './components/Question3.js';
import Question4 from './components/Question4.js';
import Question5 from './components/Question5.js';
import Welcome from './components/Welcome.js';
import Finish from './components/Finish.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/question1" component={Question1} />
          <Route exact path="/question2" component={Question2} />
          <Route exact path="/question3" component={Question3} />
          <Route exact path="/question4" component={Question4} />
          <Route exact path="/question5" component={Question5} />
          <Route exact path="/finish" component={Finish} />
        </div>
      </Router>
    );
  }
}

export default App;
