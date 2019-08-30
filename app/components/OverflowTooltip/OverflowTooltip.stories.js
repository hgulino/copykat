import { storiesOf } from '@storybook/react';
import React from 'react';
import OverflowTooltip from './index';

const defaultProps = {
  placement: 'bottom',
  title: 'Testing overflow'
};

storiesOf('OverflowTooltip', module).add('example', () => (
  <OverflowTooltip
    {...defaultProps}
    variant="h6"
    noWrap
    style={{
      width: '100px'
    }}
  >
    Testing overflow
  </OverflowTooltip>
));
