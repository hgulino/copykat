import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { emphasize } from '@material-ui/core/styles/colorManipulator'
import CancelIcon from '@material-ui/icons/Cancel'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Creatable from 'react-select/creatable'

const suggestions = [
  { label: 'CAA' },
  { label: 'PMSI' },
  { label: 'Hudson Wellness Center' },
  { label: 'Milo Magnus' },
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label,
}))

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    display: 'flex',
    width: 210,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  singleValue: {
    fontSize: 16,
    color: '#fff',
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    maxHeight: 100,
  },
  divider: {
    height: theme.spacing(2),
  },
})

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

function Control(props) {
  return (
    <TextField
      variant="outlined"
      label="Client name"
      InputLabelProps={{ shrink: props.hasValue || props.menuIsOpen }}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  )
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}>
      {props.children}
    </MenuItem>
  )
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  )
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  )
}

function DropdownIndicator() {
  return <div />
}

function IndicatorsContainer() {
  return <div />
}

const components = {
  IndicatorsContainer,
  DropdownIndicator,
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  SingleValue,
  ValueContainer,
}

class IntegrationReactSelect extends React.Component {
  render() {
    const { classes, theme } = this.props

    const selectStyles = {
      input: (base) => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
      indicatorSeparator: (base) => ({
        ...base,
        display: 'none',
      }),
      menuList: (base) => ({
        ...base,
        maxHeight: '100px',
      }),
    }

    return (
      <div className={classes.root}>
        <Creatable
          isClearable
          classes={classes}
          styles={selectStyles}
          options={suggestions}
          components={components}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder=""
        />
      </div>
    )
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect)
