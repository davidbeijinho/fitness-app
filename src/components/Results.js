import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import utils from '../utils/utils';

const Results = ({
  sex,
  age,
  height,
  weight,
  level,
  goal,
  type,
  results,
}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>
Field
        </TableCell>
        <TableCell numeric>
Value
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {[
        {
          title: 'Sex',
          value: sex,
        },
        {
          title: 'Age',
          value: age,
        },
        {
          title: 'Height',
          value: height,
        },
        {
          title: 'Weight',
          value: weight,
        },
        {
          title: 'Level',
          value: level,
        },
        {
          title: 'Goal',
          value: goal,
        },
        {
          title: 'Type',
          value: type,
        },
        {
          title: 'M BASAL',
          value: utils.calculateMBASAL({
            sex,
            age,
            height,
            weight,
            level,
            goal,
            type,
            results,
          }),
        },
        {
          title: 'LEVEL',
          value: utils.calculateLevel(utils.calculateMBASAL({
            sex,
            age,
            height,
            weight,
            level,
            goal,
            type,
            results,
          }), level),
        },
        {
          title: 'GOAL ',
          value: utils.calculateGoal(utils.calculateLevel(utils.calculateMBASAL({
            sex,
            age,
            height,
            weight,
            level,
            goal,
            type,
            results,
          }), level), goal),
        },
        {
          title: 'Resultado Final',
          value: utils
            .calculateFinalResults(utils
              .calculateGoal(utils
                .calculateLevel(utils
                  .calculateMBASAL({
                    sex,
                    age,
                    height,
                    weight,
                    level,
                    goal,
                    type,
                    results,
                  }), level), goal)),
        },
      ].map(n => (
        <TableRow key={n.title}>
          <TableCell component="th" scope="row">
            {n.title}
          </TableCell>
          <TableCell numeric>
            {n.value}
          </TableCell>
        </TableRow>
      ))}
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
  results: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
};

export default Results;
