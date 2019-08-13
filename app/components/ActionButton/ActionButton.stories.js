import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import AddIcon from '@material-ui/icons/Add';
import LinkIcon from '@material-ui/icons/Link';
import ActionButton from './index';
import theme from '../../theme';

export const defaultProps = {
  title: 'New Template',
  iconLeft: <AddIcon />
};

export const rightIconProps = {
  title: 'New Template',
  iconRight: <LinkIcon />
};

storiesOf('ActionButton', module)
  .addDecorator(muiTheme([theme]))
  .add('color', () => (
    <Fragment>
      <ActionButton color="primary" {...defaultProps} />
      <ActionButton color="secondary" {...defaultProps} />
    </Fragment>
  ))
  .add('icon right', () => <ActionButton color="primary" {...rightIconProps} />)
  .add('disabled', () => (
    <ActionButton color="primary" disabled {...defaultProps} />
  ))
  .add('loading', () => (
    <Fragment>
      <ActionButton color="primary" loading {...defaultProps} />
      <ActionButton color="secondary" loading {...defaultProps} />
    </Fragment>
  ));
