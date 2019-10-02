import { storiesOf } from '@storybook/react';
import React from 'react';
import ProjectChip from './index';

const defaultProps = {
  label: 'completed',
  loading: false
};

storiesOf('ProjectChip', module).add('completed', () => (
  <ProjectChip {...defaultProps} />
));
