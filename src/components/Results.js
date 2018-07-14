import React from "react";
import { connect } from 'react-redux'
import utils from '../utils';

const Finish = (props) => (
    <table className="table">
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Sex</th>
          <td>{props.sex}</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>{props.age}</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>{props.height}</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>{props.weight}</td>
        </tr>
        <tr>
          <th>Level</th>
          <td>{props.level}</td>
        </tr>
        <tr>
          <th>Goal</th>
          <td>{props.goal}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>{props.type}</td>
        </tr>
        <tr>
          <th>M BASAL</th>
          <td>{utils.calculateMBASAL(props)}</td>
        </tr>
        <tr>
          <th>LEVEL</th>
          <td>{utils.calculateLevel(utils.calculateMBASAL(props), props.level)}</td>
        </tr>
        <tr>
          <th>GOAL </th>
          <td>{utils.calculateGoal(utils.calculateLevel(utils.calculateMBASAL(props),props.level),props.goal)}</td>
        </tr>
        <tr>
          <th>Resultado Final</th>
          <td>{utils.calculateFinalResults(utils.calculateGoal(utils.calculateLevel(utils.calculateMBASAL(props),props.level),props.goal))}</td>
        </tr>

      </tbody>
    </table>
);
const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
)(Finish);