import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ContinueButton from "./ContinuButton";

const CardQuestion = ({ title, link, value, children }) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h1">{title}</Typography>
      {children}
    </CardContent>
    <CardActions>
      <ContinueButton value={value} link={link} />
    </CardActions>
  </Card>
);

export default CardQuestion;