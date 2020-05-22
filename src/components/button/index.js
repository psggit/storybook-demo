import React from 'react'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import PropTypes from 'prop-types';

const StandardButton = (props) => {

  const { color, disabled = false, onClick, title,  variant="contained"} = props

  const classes = useStyles()

  const buttonColorOverrides = []

  if (color === 'primary') buttonColorOverrides.push(classes.buttonPrimary)
  else if (color === 'secondary') buttonColorOverrides.push(classes.buttonSecondary)

  const buttonProps = {
    onClick: onClick,
    className: classnames(classes.button, ...buttonColorOverrides),
    variant,
    color,
    disabled
  }

  return (
    <Button {...buttonProps}>
      {title}
    </Button>
  )
}


StandardButton.defaultProps = {
  color: 'primary',
  disabled: false,
  variant: 'contained'
}

StandardButton.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
}

const useStyles = makeStyles(theme => ({
  buttonError: {
    backgroundColor: '#ff1744',
    color: "#fff"
  },
  button: {
    verticalAlign: 'none',
    textTransform: "none"
  },
  buttonDisabled: {
    opacity: 0.6
  },
  biPrimary: {
    backgroundColor: '32979ff',
    color: "#fff"
  },
  buttonTextUpperCase: {
    textTransform: 'uppercase'
  },
  buttonSecondary: {
    backgroundColor: '#af52bf',
    color: "#fff",
    borderWidth: '1px',
    borderStyle: 'solid'
  },
  buttonTertiary: {
    backgroundColor: '#474655',
    color: "#fff"
  }
}))

export default StandardButton;