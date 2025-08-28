import { render } from '@redwoodjs/testing/web'

import BtnLink from './BtnLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BtnLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BtnLink />)
    }).not.toThrow()
  })
})
