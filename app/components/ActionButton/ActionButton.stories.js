import { storiesOf } from '@storybook/react';
import AddIcon from '@material-ui/icons/Add';
import LinkIcon from '@material-ui/icons/Link';
import React, { Fragment } from 'react';
import ActionButton from './index';

const defaultProps = {
  title: 'New Template'
};

storiesOf('ActionButton', module)
  .add('color', () => (
    <Fragment>
      <ActionButton color="primary" {...defaultProps} />
      <ActionButton color="secondary" {...defaultProps} />
    </Fragment>
  ))
  .add('icons', () => (
    <Fragment>
      <ActionButton color="primary" iconLeft={<AddIcon />} {...defaultProps} />
      <ActionButton
        color="secondary"
        iconRight={<LinkIcon />}
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
