import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import AddIcon from '@material-ui/icons/Add';
import LinkIcon from '@material-ui/icons/Link';
import ActionButton from './index';
import theme from '../../theme';

const defaultProps = {
  title: 'New Template'
};

storiesOf('ActionButton', module)
  .addDecorator(muiTheme([theme]))
  .add('color', () => (
    <Fragment>
      <ActionButton color="primary" {...defaultProps} />
      <ActionButton color="secondary" {...defaultProps} />
    </Fragment>
  ))
  .add('icons', () => (
    <Fragment>
      <ActionButton color="primary" iconRight={<AddIcon />} {...defaultProps} />
      <ActionButton
        color="secondary"
        iconLeft={<LinkIcon />}
        {...defaultProps}
      />
    </Fragment>
  ))
  .add('disabled', () => (
    <Fragment>
      <ActionButton
        color="primary"
        iconLeft={<AddIcon />}
        disabled
        {...defaultProps}
      />
      <ActionButton color="primary" disabled {...defaultProps} />
    </Fragment>
  ))
  .add('loading', () => (
    <Fragment>
      <ActionButton
        color="primary"
        iconLeft={<AddIcon />}
        loading
        {...defaultProps}
      />
      <ActionButton color="secondary" loading {...defaultProps} />
    </Fragment>
  ));
