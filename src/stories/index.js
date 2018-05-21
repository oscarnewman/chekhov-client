import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import GuestCell from '../components/GuestCell/GuestCell'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

const guest = {
  name: 'Oscar Newman',
  date: 'Friday, Jan 14',
  ticketNumber: '185',
}
storiesOf('Guest', module)
  .add('default state', () => <GuestCell guest={guest} />)
  .add('entered', () => <GuestCell entered guest={guest} />)
