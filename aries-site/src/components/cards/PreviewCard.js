import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const PreviewImageCard = ({ children, ...rest }) => {
  return (
    <Box
      height="small"
      round="xsmall"
      overflow="hidden"
      style={{ position: 'relative' }}
      {...rest}
    >
      {children}
    </Box>
  );
};

PreviewImageCard.defaultProps = {
  background: 'background-contrast',
};

PreviewImageCard.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};
