import React from "react";
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Typography from '@material-ui/core/Typography';
import { setAge, setHeight, setWeight } from "../actions/index";
import ContinueButton from "./ContinuButton";
import { QUESTIONS } from '../constants';

const DATA = QUESTIONS[1];

const Question2 = (props) => (

  <Card>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h1">{DATA.title}</Typography>

      <FormControl fullWidth aria-describedby="weight-helper-text" >
        <InputLabel htmlFor={DATA.options[0].id}>{DATA.options[0].label}</InputLabel>
        <Input
          id={DATA.options[0].id}
          onChange={props.setAge}
          endAdornment={<InputAdornment position="end">{DATA.options[0].extraLabel}</InputAdornment>}
          inputProps={{ 'aria-label': DATA.options[0].label, }}
        />
      </FormControl>

      <FormControl fullWidth aria-describedby="weight-helper-text" >
        <InputLabel htmlFor={DATA.options[1].id}>{DATA.options[1].label}</InputLabel>
        <Input
          id={DATA.options[1].id}
          onChange={props.setHeight}
          endAdornment={<InputAdornment position="end">{DATA.options[1].extraLabel}</InputAdornment>}
          inputProps={{ 'aria-label': DATA.options[1].label, }}
        />
      </FormControl>

      <FormControl fullWidth aria-describedby="weight-helper-text" >
        <InputLabel htmlFor={DATA.options[2].id}>{DATA.options[2].label}</InputLabel>
        <Input
          id={DATA.options[2].id}
          onChange={props.setWeight}
          endAdornment={<InputAdornment position="end">{DATA.options[2].extraLabel}</InputAdornment>}
          inputProps={{ 'aria-label': DATA.options[2].label, }}
        />
      </FormControl>

    </CardContent>
    <CardActions>
      <ContinueButton value={[props.age, props.height, props.weight]} link={DATA.link} />
    </CardActions>
  </Card>
);


const mapStateToProps = (state) => {
  return {
    age: state.age,
    height: state.height,
    weight: state.weight,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAge: changeEvent => {
      dispatch(setAge(Number(changeEvent.target.value)))
    },
    setHeight: changeEvent => {
      dispatch(setHeight(Number(changeEvent.target.value)))
    },
    setWeight: changeEvent => {
      dispatch(setWeight(Number(changeEvent.target.value)))
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question2);