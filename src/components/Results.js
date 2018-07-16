import React from "react";
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import utils from '../utils/utils.js';

const Results = (props) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Field</TableCell>
        <TableCell numeric>Value</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {[
        {
          title: 'Sex',
          value: props.sex,
        },
        {
          title: 'Age',
          value: props.age
        },
        {
          title: 'Height',
          value: props.height,
        },
        {
          title: 'Weight',
          value: props.weight,
        },
        {
          title: 'Level',
          value: props.level,
        },
        {
          title: 'Goal',
          value: props.goal,
        },
        {
          title: 'Type',
          value: props.type,
        },
        {
          title: 'M BASAL',
          value: utils.calculateMBASAL(props),
        },
        {
          title: 'LEVEL',
          value: utils.calculateLevel(utils.calculateMBASAL(props), props.level),
        },
        {
          title: 'GOAL ',
          value: utils.calculateGoal(utils.calculateLevel(utils.calculateMBASAL(props), props.level), props.goal),
        },
        {
          title: 'Resultado Final',
          value: utils.calculateFinalResults(utils.calculateGoal(utils.calculateLevel(utils.calculateMBASAL(props), props.level), props.goal)),
        }
      ].map((n, index) => {
        return (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {n.title}
            </TableCell>
            <TableCell numeric>{n.value}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

Results.propTypes = {
  sex: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
};

export default Results;