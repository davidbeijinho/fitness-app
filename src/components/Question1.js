import React from "react";
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import { setSex } from "../actions/index";
import ContinueButton from "./ContinuButton";

const Question1 = ({question, value, sendState}) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h1">{question.title}</Typography>

      <FormControl component="fieldset" required >
        <RadioGroup
          aria-label={question.name}
          name={question.name}
          value={value}
          onChange={sendState}
        >
          {question.options.map(function (option, index) {
            return <FormControlLabel key={index} value={option.value} control={<Radio color="primary" />} label={option.label} />;
          })}
        </RadioGroup>
      </FormControl>

    </CardContent>
    <CardActions>
      <ContinueButton value={value} link={question.link} />
    </CardActions>
  </Card>
);

const mapStateToProps = (state) => {
  return {
    value: state.sex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendState: changeEvent => {
      dispatch(setSex(changeEvent.target.value))
    }
  }
}

export default connect(
  null,
  null
)(Question1);