import { Component } from 'react';
import PropTypes from 'prop-types';


class Redirector extends Component {
  componentDidMount() {
    window.location.href = this.props.link;
  }

  render() {
    return '';
  }
}

Redirector.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Redirector;
