import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import OverflowTooltip from './index';

const defaultProps = {
  title: 'New Template'
};

storiesOf('OverflowTooltip', module).add('example', () => (
  <Fragment>
    <OverflowTooltip {...defaultProps} />
  </Fragment>
));
