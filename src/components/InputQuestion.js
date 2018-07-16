import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import CardQuestion from './CardQuestion';

const InputQuestion = ({
  question, value, sendState, enabledLabel, disabledLabel,
}) => (
  <CardQuestion
    title={question.title}
    link={question.link}
    value={value}
    enabledLabel={enabledLabel}
    disabledLabel={disabledLabel}
  >
    {question.options.map(option => (
      <FormControl key={option.id} fullWidth aria-describedby="weight-helper-text">
        <TextField
          InputProps={{
            endAdornment:
  <InputAdornment position="end">
    {option.adornment }
  </InputAdornment>,
          }}
          id={option.id}
          type="number"
          label={option.label}
          onChange={sendState[option.onChange]}
          margin="normal"
        />
      </FormControl>
    ))}
  </CardQuestion>
);

InputQuestion.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      help: PropTypes.string.isRequired,
      adornment: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      onChange: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  sendState: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
  enabledLabel: PropTypes.string.isRequired,
  disabledLabel: PropTypes.string.isRequired,
};

export default InputQuestion;
