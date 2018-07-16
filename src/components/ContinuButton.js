import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function validateProps(props) {
  if (Array.isArray(props)) {
    return props.some(x => x === '' || x === 0);
  }
  return props === '' || props === 0;
}

const ContinueButton = ({
  value, link, enabledLabel, disabledLabel,
}) => (
  validateProps(value)
    ? (
      <Button variant="contained" disabled color="primary">
        {enabledLabel}
      </Button>
    )
    : (
      <Link to={link}>
        <Button variant="contained" color="primary">
          {disabledLabel}
        </Button>
      </Link>
    )
);

ContinueButton.propTypes = {
  link: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  enabledLabel: PropTypes.string.isRequired,
  disabledLabel: PropTypes.string.isRequired,
};

export default ContinueButton;
