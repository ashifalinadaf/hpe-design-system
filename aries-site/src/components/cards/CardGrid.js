import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'grommet';

import { ContentCard } from '.';
import { nameToPath } from '../../utils';

export const CardGrid = ({ cards, developer, minimal, ...rest }) => (
  <Grid
    columns={developer ? 'small' : 'medium'}
    rows="auto"
    gap="medium"
    justify="center"
    {...rest}
  >
    {cards &&
      cards.map(topic => {
        const href = topic.href || nameToPath(topic.name);

        return (
          <ContentCard
            key={topic.name}
            href={href}
            topic={topic}
            minimal={minimal}
            developer={developer}
          />
        );
      })}
  </Grid>
);

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  developer: PropTypes.bool,
  minimal: PropTypes.bool,
};
