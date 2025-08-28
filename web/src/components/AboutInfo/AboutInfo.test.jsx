import { render } from '@redwoodjs/testing/web'

import AboutInfo from './AboutInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AboutInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutInfo />)
    }).not.toThrow()
  })
})
