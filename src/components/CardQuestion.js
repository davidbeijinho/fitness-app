import React from "react";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ContinueButton from "./ContinuButton";
import CardHeader from '@material-ui/core/CardHeader';

const CardQuestion = ({ title, link, value, children }) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>
      {children}
    </CardContent>
    <CardActions>
      <ContinueButton value={value} link={link} />
    </CardActions>
  </Card>
);

CardQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object,
  ]).isRequired,
};

export default CardQuestion;