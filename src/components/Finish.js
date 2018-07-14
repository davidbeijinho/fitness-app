import React from "react";
import { connect } from 'react-redux'
import utils from '../utils';
import { OTHERS } from '../constants';

const Finish = (props) => (
  <div className="box">
    <h1 className="label is-large">{OTHERS.finish.header}</h1>
    <p>
      {utils.getFileFromFinalResults(
        utils.calculateFinalResults(
          utils.calculateGoalCENAS(
            utils.calculateLevelCENAS(
              utils.calculateMBASAL(props),
              props.level),
            props.goal)), props.goal).text}
    </p>
    <a href={utils.getFileFromFinalResults(
      utils.calculateFinalResults(
        utils.calculateGoalCENAS(
          utils.calculateLevelCENAS(
            utils.calculateMBASAL(props),
            props.level),
          props.goal)), props.goal).link} >{OTHERS.finish.buttonTex}</a>

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
          <th>LEVEL CENAS</th>
          <td>{utils.calculateLevelCENAS(utils.calculateMBASAL(props), props.level)}</td>
        </tr>
        <tr>
          <th>OTHER CENAS</th>
          <td>{utils.calculateGoalCENAS(
            utils.calculateLevelCENAS(
              utils.calculateMBASAL(props),
              props.level),
            props.goal)}</td>
        </tr>
        <tr>
          <th>Resultado Final</th>
          <td>{
            utils.calculateFinalResults(
              utils.calculateGoalCENAS(
                utils.calculateLevelCENAS(
                  utils.calculateMBASAL(props),
                  props.level),
                props.goal))
          }</td>
        </tr>

      </tbody>
    </table>


  </div>
);
const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
)(Finish);