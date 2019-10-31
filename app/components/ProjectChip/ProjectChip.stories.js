import { storiesOf } from '@storybook/react';
import React from 'react';
import ProjectChip from './index';

const defaultProps = {
  label: 'completed',
  loading: false
};

storiesOf('ProjectChip', module)
  .add('loading', () => <ProjectChip {...defaultProps} loading />)
  .add('active', () => <ProjectChip {...defaultProps} label="active" />)
  .add('due', () => <ProjectChip {...defaultProps} label="due" />)
  .add('preview', () => <ProjectChip {...defaultProps} label="preview" />)
  .add('completed', () => <ProjectChip {...defaultProps} />)
  .add('archived', () => <ProjectChip {...defaultProps} label="archived" />);
