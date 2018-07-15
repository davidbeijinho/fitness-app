import React from "react";
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import utils from '../utils';
import { OTHERS } from '../constants';
// import Results from "./Results";

const Finish = (props) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h1">{OTHERS.finish.header}</Typography>

      <p>{utils.getText(props)}</p>
      {/* <Results /> */}
    </CardContent>
    <CardActions>
      <a href={utils.getLink(props)} >
        <Button variant="contained" color="primary">{OTHERS.finish.buttonTex}</Button>
      </a>
    </CardActions>
  </Card>
);
const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
)(Finish);