import { render } from '@redwoodjs/testing/web'

import BlogList from './BlogList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BlogList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogList />)
    }).not.toThrow()
  })
})
