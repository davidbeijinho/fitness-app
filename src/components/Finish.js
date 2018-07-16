import React from "react";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import utils from '../utils/utils';
import CardHeader from '@material-ui/core/CardHeader';
// import Results from "./Results";

const Finish = (props) => (
  <Card>
    <CardHeader title={props.title} />
    <CardContent>
      {utils.getText(props)}
      {/* <Results /> */}
    </CardContent>
    <CardActions>
      <a href={utils.getLink(props)} >
        <Button variant="contained" color="primary">{props.buttonLabel}</Button>
      </a>
    </CardActions>
  </Card>
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
};

export default Finish;