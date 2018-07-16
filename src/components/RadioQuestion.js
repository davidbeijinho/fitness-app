import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardQuestion from './CardQuestion';

const RadioQuestion = ({
  question, value, sendState, enabledLabel, disabledLabel,
}) => (
  <CardQuestion
    title={question.title}
    link={question.link}
    value={value}
    enabledLabel={enabledLabel}
    disabledLabel={disabledLabel}
  >
    <FormControl component="fieldset" required>
      <RadioGroup
        aria-label={question.name}
        name={question.name}
        value={String(value)}
        onChange={sendState}
      >
        {question.options.map(option => (
          <FormControlLabel
            key={option.label}
            value={String(option.value)}
            control={<Radio color="primary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  </CardQuestion>
);

RadioQuestion.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  sendState: PropTypes.func.isRequired,
  enabledLabel: PropTypes.string.isRequired,
  disabledLabel: PropTypes.string.isRequired,
};

export default RadioQuestion;
