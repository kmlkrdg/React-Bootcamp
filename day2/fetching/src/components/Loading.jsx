import React from 'react';
import PropTypes from 'prop-types';

function Loading({ message }) {
  return <div>{message}</div>;
}

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: 'Loading...',
};

export default Loading;
