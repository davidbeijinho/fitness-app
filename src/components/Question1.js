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
import { QUESTIONS } from '../constants';
const DATA = QUESTIONS[0];

const Question1 = (props) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h1">{DATA.title}</Typography>

      <FormControl component="fieldset" required >
        <RadioGroup
          aria-label={DATA.name}
          name={DATA.name}
          value={props.value}
          onChange={props.sendState}
        >
          {DATA.options.map(function (option, index) {
            return <FormControlLabel key={index} value={option.value} control={<Radio color="primary" />} label={option.label} />;
          })}
        </RadioGroup>
      </FormControl>

    </CardContent>
    <CardActions>
      <ContinueButton value={props.value} link={DATA.link} />
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
  mapStateToProps,
  mapDispatchToProps
)(Question1);