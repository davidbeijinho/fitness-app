import React from 'react';
import PropTypes from 'prop-types';
import CardQuestion from './CardQuestion';

const Welcome = ({
  title, link, value, content, enabledLabel, disabledLabel,
}) => (
  <CardQuestion
    title={title}
    link={link}
    value={value}
    enabledLabel={enabledLabel}
    disabledLabel={disabledLabel}
  >
    <p>
      {content}
    </p>
  </CardQuestion>
);

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  content: PropTypes.string.isRequired,
  enabledLabel: PropTypes.string.isRequired,
  disabledLabel: PropTypes.string.isRequired,
};

export default Welcome;
