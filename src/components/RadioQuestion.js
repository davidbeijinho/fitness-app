import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardQuestion from "./CardQuestion";

const RadioQuestion = ({ question, value, sendState }) => (
  <CardQuestion  title={question.title} link={question.link} value={value} >
    <FormControl component="fieldset" required >
      <RadioGroup
        aria-label={question.name}
        name={question.name}
        value={String(value)}
        onChange={sendState}
      >
        {question.options.map(function (option, index) {
          return <FormControlLabel key={index} value={String(option.value)} control={<Radio color="primary" />} label={option.label} />;
        })}
      </RadioGroup>
    </FormControl>
  </CardQuestion>
);


export default RadioQuestion;