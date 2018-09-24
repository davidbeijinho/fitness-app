import React from 'react';
import PropTypes from 'prop-types';
import utils from '../utils/utils';
import Redirector from './Redirector';


const Finish = ({ title, buttonLabel, ...rest }) => (
  <Redirector link={utils.getLink(rest)} />
);

Finish.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
  results: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
};

export default Finish;
