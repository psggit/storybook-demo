import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from '@storybook/addon-knobs';
//import { withInfo } from '@storybook/addon-info';
import Button from './../components/button'


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => <Button title={text('title', 'primary')} color="primary" onClick={action("clicked")} />)
  // .add('Default', withInfo('This is an informational paragraph you can use to describe your component')(
  //   () => <Button title="Default" onClick={action('onClick')}>Default</Button>
  // ))
  // .add('primary - custom style', () => <Button title="Custom Width" color="primary" style={{'width': '300px'}} />)
  // .add('primary useRealText', () => <Button useRealText={true} text="Hello"/>)
  // .add('secondary ', () => <Button title="Secondary" color="secondary" />)
  // .add('error', () => <Button title="Error" color="error" />)