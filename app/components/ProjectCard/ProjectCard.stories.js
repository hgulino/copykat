import { storiesOf } from '@storybook/react';
import React from 'react';
import ProjectCard from './index';

const defaultProps = {
  avatar: 'SB',
  client: 'Facebook',
  colors: {
    primary: '#ce93d8',
    secondary: '#8e24aa'
  },
  key: 0,
  loading: false,
  onClick: () => {},
  projectName: 'New Template',
  projectPath: 'C:/Users/gulino/Documents',
  status: 'active'
};

storiesOf('ProjectCard', module)
  .add('default', () => <ProjectCard {...defaultProps} />)
  .add('overflow', () => (
    <ProjectCard
      {...defaultProps}
      projectName="OOVVEERRFFLLOOWW"
      projectPath="C:/Users/gulino/Documents/overflow/overflow/overflow"
    />
  ))
  .add('loading', () => <ProjectCard {...defaultProps} loading />)
  .add('preview', () => <ProjectCard {...defaultProps} preview />)
  .add('finished', () => <ProjectCard {...defaultProps} status="completed" />)
  .add('archived', () => <ProjectCard {...defaultProps} status="archived" />);
