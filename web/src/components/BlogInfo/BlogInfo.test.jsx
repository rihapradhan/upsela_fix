import { render } from '@redwoodjs/testing/web'

import BlogInfo from './BlogInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BlogInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogInfo />)
    }).not.toThrow()
  })
})
