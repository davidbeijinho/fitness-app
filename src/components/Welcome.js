import React from "react";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { OTHERS } from '../constants';
import Button from '@material-ui/core/Button';

const Welcome = () => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h1">{OTHERS.welcome.header}</Typography>

      <p>{OTHERS.welcome.text}</p>

    </CardContent>
    <CardActions>
      <Link to="/question1" ><Button variant="contained" color="primary">{OTHERS.welcome.button}</Button></Link>
    </CardActions>
  </Card>

);

export default Welcome;