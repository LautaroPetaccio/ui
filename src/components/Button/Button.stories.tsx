import * as React from 'react'
import { Icon } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import { Button } from './Button'
import './Button.stories.css'

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Primary', () => (
    <>
      <Button primary>Vote Now</Button>
      <Button primary disabled>
        Vote Now
      </Button>
    </>
  ))
  .add('Secondary', () => (
    <>
      <Button>Cancel</Button>
      <Button disabled>Cancel</Button>
    </>
  ))
  .add('Basic', () => (
    <>
      <Button basic>Download</Button>
      <Button basic disabled>
        Download
      </Button>
    </>
  ))
  .add('Inverted', () => (
    <>
      <Button inverted>Download</Button>
      <Button inverted disabled>
        Download
      </Button>
      <Button inverted primary>
        Download
      </Button>
      <Button inverted primary disabled>
        Download
      </Button>
    </>
  ))
  .add('Link', () => (
    <>
      <Button href="https://google.com" primary>
        google.com
      </Button>
    </>
  ))
  .add('Icon', () => (
    <>
      <Button basic>
        <Icon name="edit" />
        Edit
      </Button>
    </>
  ))
  .add('Sizes', () => (
    <>
      <div className="button-story-row">
        <Button primary size="large">
          Really Long Label
        </Button>
        <Button primary size="large">
          Min Width
        </Button>
        <Button primary disabled size="large">
          Disabled
        </Button>
      </div>
      <div className="button-story-row">
        <Button size="large">Really Long Label</Button>
        <Button size="large">Min Width</Button>
        <Button disabled size="large">
          Disabled
        </Button>
      </div>
      <div className="button-story-row">
        <Button primary>Really Long Label</Button>
        <Button primary>Min Width</Button>
        <Button primary disabled>
          Disabled
        </Button>
      </div>
      <div className="button-story-row">
        <Button>Really Long Label</Button>
        <Button>Min Width</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="button-story-row">
        <Button primary size="small">
          Really Long Label
        </Button>
        <Button primary size="small">
          Min Width
        </Button>
        <Button primary disabled size="small">
          Disabled
        </Button>
      </div>
      <div className="button-story-row">
        <Button size="small">Really Long Label</Button>
        <Button size="small">Min Width</Button>
        <Button disabled size="small">
          Disabled
        </Button>
      </div>
      <div className="button-story-row">
        <Button primary size="tiny">
          Really Long Label
        </Button>
        <Button primary size="tiny">
          Min Width
        </Button>
        <Button primary disabled size="tiny">
          Disabled
        </Button>
      </div>
      <div className="button-story-row">
        <Button size="tiny">Really Long Label</Button>
        <Button size="tiny">Min Width</Button>
        <Button disabled size="tiny">
          Disabled
        </Button>
      </div>
    </>
  ))
  .add('Actions', () => (
    <>
      <Button primary style={{ minWidth: 190 }}>
        Vote Now
      </Button>
      <Button style={{ minWidth: 190 }}>Cancel</Button>
    </>
  ))
