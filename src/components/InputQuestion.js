import React from "react";
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CardQuestion from "./CardQuestion";

const InputQuestion = ({ question, value, sendState }) => (
  <CardQuestion  title={question.title} link={question.link} value={[value.age, value.height, value.weight]} >
      {question.options.map(function (option) {
        return <FormControl  key={option.id} fullWidth aria-describedby="weight-helper-text" >
          <InputLabel key={`label-${option.id}`} htmlFor={option.id}>{option.label}</InputLabel>
          <Input
            id={option.id}
            onChange={sendState[option.onChange]}
            endAdornment={<InputAdornment position="end">{option.adornment}</InputAdornment>}
            inputProps={{ 'aria-label': option.label, }}
          />
        </FormControl>;
      })}
  </CardQuestion>
);

export default InputQuestion;