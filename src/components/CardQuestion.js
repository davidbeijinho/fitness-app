import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ContinueButton from './ContinuButton';

const CardQuestion = ({
  title, link, value, children, enabledLabel, disabledLabel,
}) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>
      {children}
    </CardContent>
    <CardActions>
      <ContinueButton
        value={value}
        link={link}
        enabledLabel={enabledLabel}
        disabledLabel={disabledLabel}
      />
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
  enabledLabel: PropTypes.string.isRequired,
  disabledLabel: PropTypes.string.isRequired,
};

export default CardQuestion;
