import { render } from '@redwoodjs/testing/web'

import WebDevelopment from './WebDevelopment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WebDevelopment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WebDevelopment />)
    }).not.toThrow()
  })
})
