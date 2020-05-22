import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from "@storybook/addon-actions"
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from './../components/button'


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => <Button title={text('title', 'primary')} color="primary" onClick={action("clicked")} />)
